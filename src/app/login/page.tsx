import { LoginForm } from '@/components/forms/LoginForm'
import Link from 'next/link'

export default function Page() {
  return (
    <main className="flex flex-col items-center py-14 gap-10">
      <span className="text-xl font-semibold">Welcome back to the Firesnap!</span>
      <LoginForm />
      <span>
        Don&apos;t have an account?{' '}
        <Link href="/signup" className="underline">
          Sign up
        </Link>
        .
      </span>
    </main>
  )
}
