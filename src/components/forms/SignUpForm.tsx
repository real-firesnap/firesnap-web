'use client'

import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useToast } from '@/components/ui/use-toast'
import { useRouter } from 'next/navigation'
import HCaptcha from '@hcaptcha/react-hcaptcha'
import * as z from 'zod'

const formSchema = z.object({
  username: z
    .string()
    .min(3, 'Username must contain at least 3 characters')
    .max(15, 'Username must contain at most 15 characters')
    .regex(
      /^[a-zA-Z0-9\-_]*$/,
      'Username must contain only English letters, numbers, dash and underscore'
    ),
  name: z.string()
    .min(3, 'Name must contain at least 3 characters')
    .max(15, 'Name must contain at most 30 characters'),
  password: z.string().min(6, 'Password must contain at least 6 characters')
})

export function SignUpForm() {
  const [captcha, setCaptcha] = useState<string | null>(null)
  const hCaptcha = useRef<HCaptcha>(null)
  const { push } = useRouter()
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      name: '',
      password: ''
    }
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    hCaptcha.current?.resetCaptcha()

    if (!captcha) {
      toast({
        title: 'Error',
        description: 'Wrong captcha!'
      })
      return
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...values })
    })
    if (res.ok) {
      push(`/${values.username}`)
    } else if (res.status == 409) {
      toast({
        title: 'Error',
        description: 'Username already taken!'
      })
    } else {
      toast({
        title: 'Error',
        description: 'Unknown error!'
      })
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col space-y-4 max-w-md w-full px-4"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="ex. my_username" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Public name</FormLabel>
              <FormControl>
                <Input placeholder="ex. Jessie Vincent" {...field} />
              </FormControl>
              <FormDescription>You can always change it later.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="ex. my_pa$$w0rd" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <HCaptcha
          ref={hCaptcha}
          sitekey={
            process.env.NEXT_PUBLIC_HCAPTCHA_SITEKEY ||
            '10000000-ffff-ffff-ffff-000000000001'
          }
          onVerify={(token) => setCaptcha(token)}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </Form>
  )
}
