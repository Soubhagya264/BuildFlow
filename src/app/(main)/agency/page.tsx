import { getAuthUserDetails, verifyAndAcceptInvitation } from "@/lib/queries";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Plan } from '@prisma/client'
import { User } from '@prisma/client'
import AgencyDetails from "@/components/forms/agency-details";
const page = async (
    {
        searchParams,
    }: {
        searchParams: { plan: Plan; state: string; code: string }
    }
) => {
    const agencyId = await verifyAndAcceptInvitation()
    const authUser = await currentUser();
    if (!authUser) return redirect('/sign-in')
    const user = await getAuthUserDetails();
    if (agencyId) {
        if (user?.role === 'SUBACCOUNT_GUEST' || user?.role === 'SUBACCOUNT_USER') {
            if (!searchParams || Object.keys(searchParams).length === 0) {
                return redirect('/subaccount');
            }
            // 🔹 Redirecting with searchParams
            return redirect(`/subaccount?${new URLSearchParams(searchParams).toString()}`);
        } else if (user?.role === 'AGENCY_OWNER' || user?.role === 'AGENCY_ADMIN') {
            if (searchParams.plan) {
                return redirect(`/agency/${agencyId}/billing?plan=${searchParams.plan}`)
            }

            if (searchParams.state) {
                const statePath = searchParams.state.split('___')[0]
                const stateAgencyId = searchParams.state.split('___')[1]
                if (!stateAgencyId) return <div>Not authorized</div>
                return redirect(
                    `/agency/${stateAgencyId}/${statePath}?code=${searchParams.code}`
                )
            } else return redirect(`/agency/${agencyId}`)
        } else {
            return <div>Not authorized</div>
        }
    }

    return (
        <div className="flex justify-center items-center mt-4">
            <div className="max-w-[850px] border-[1px] p-4 rounded-xl">
                <h1 className="text-4xl"> Create An Agency</h1>
                <AgencyDetails
                    data={{ companyEmail: authUser?.emailAddresses[0].emailAddress }}
                />
            </div>
        </div>
    );
}


export default page;


