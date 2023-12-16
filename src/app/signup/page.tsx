import { SignUpForm } from '@/components/forms/SignUpForm'
import Link from 'next/link'

export default function Page() {
  return (
    <main className="flex flex-col items-center py-14 gap-10">
      <span className="text-xl font-semibold">Welcome to Firesnap!</span>
      <SignUpForm />
      <span>
        Already have an account?{' '}
        <Link href="/login" className="underline">
          Login
        </Link>
        .
      </span>
    </main>
  )
}
