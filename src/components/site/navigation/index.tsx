import { ModeToggle } from '@/components/global/mode-toggle'
import { UserButton } from '@clerk/nextjs'
import { User } from '@clerk/nextjs/server'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
  user?: null | User
}

const Navigation = ({ user }: Props) => {
  return (
    <div className="absolute top-0 right-0 left-0 pb-5 p-5 bg-[rgba(69,62,173,0.9)] flex items-center justify-between z-10">
      <aside className="flex items-center gap-2">
        <Image
          src={'/assets/buildflow.png'}
          width={40}
          height={40}
          alt="buildflowlogo"
        />
        <span className="text-xl font-bold">BuildFlow.</span>
      </aside>
      <nav className="hidden md:block absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]">
        <ul className="flex items-center justify-center gap-8">
          <Link href={'#'}>Pricing</Link>
          <Link href={'#'}>About</Link>
          <Link href={'#'}>Documentation</Link>
          <Link href={'#'}>Features</Link>
        </ul>
      </nav>
      <aside className="flex gap-2 items-center">
        <Link
          href={'/agency'}
          className="bg-amber-400 text-slate-900 p-2 px-4 rounded-xl hover:bg-amber-300"
        >
          <span className="text-lg font-bold"> Build</span>
        </Link>
        <UserButton />
      </aside>
    </div>
  )
}

export default Navigation