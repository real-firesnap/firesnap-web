// 'use client'

import Link from "next/link";
import { Jost } from 'next/font/google'
import { Button } from "./ui/button";
import ThemeSwitch from "./ThemeSwitch";
import { getServerSession } from "next-auth";

const jost = Jost({ subsets: ['latin'] })

export default async function Header() {
  const session = await getServerSession()

  return (
    <header className="flex justify-between py-3 px-40">
      <Link href="/" className={`${jost.className} font-bold text-2xl`}>
        Firesnap
      </Link>
      <div className="flex items-center gap-3">
        <ThemeSwitch />
        {session ? (
          <Link href={`/${session.user?.name}`}>
            <Button variant="outline">
              {session.user?.name}
            </Button>
          </Link>
        ) : (
          <div className="flex gap-3">
            <Link href="/signup">
              <Button>Sign Up</Button>
            </Link>
            <Link href="/login">
              <Button variant="outline">Login</Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}
