import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { currentUser } from '@/lib/auth'
import { stripe } from '@/lib/stripe'
import { Agency } from '@prisma/client'

export async function POST(req: Request) {
  try {
    const user = await currentUser()
    if (!user) {
      return new NextResponse('Unauthorized', { status: 401 })
    }

    const body = await req.json()
    const { agencyId } = body

    if (!agencyId) {
      return new NextResponse('Agency ID is required', { status: 400 })
    }

    const agency = await db.agency.findUnique({
      where: { id: agencyId },
    })

    if (!agency) {
      return new NextResponse('Agency not found', { status: 404 })
    }

    // Create or update Stripe account
    const account = await stripe.accounts.create({
      type: 'standard',
      email: agency.companyEmail,
      business_type: 'company',
      business_profile: {
        name: agency.name,
        url: agency.companyWebsite,
      },
      capabilities: {
        card_payments: { requested: true },
        transfers: { requested: true },
      },
    })

    // Update agency with Stripe account ID
    const updatedAgency = await db.agency.update({
      where: { id: agencyId },
      data: {
        stripeAccountId: account.id,
      },
    })

    // Create account link for onboarding
    const accountLink = await stripe.accountLinks.create({
      account: account.id,
      refresh_url: `${process.env.NEXT_PUBLIC_APP_URL}/agency/${agencyId}/billing`,
      return_url: `${process.env.NEXT_PUBLIC_APP_URL}/agency/${agencyId}/billing`,
      type: 'account_onboarding',
    })

    return NextResponse.json({ url: accountLink.url })
  } catch (error) {
    console.error('Error in Stripe account setup:', error)
    return new NextResponse(
      'An error occurred while setting up your Stripe account. Please try again.',
      { status: 500 }
    )
  }
} 