'use client'

import { useState, Suspense } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Home, Mail, Lock, User, Eye, EyeOff } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Checkbox } from '@/components/ui/checkbox'
import { Separator } from '@/components/ui/separator'
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group'

function LoginContent() {
  const searchParams = useSearchParams()
  const defaultTab = searchParams.get('tab') === 'signup' ? 'signup' : 'login'

  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-muted/30 px-4 py-12">
      <Link href="/" className="mb-8 flex items-center gap-2">
        <Home className="size-8 text-primary" />
        <span className="text-2xl font-semibold text-foreground">StayNest</span>
      </Link>

      <div className="w-full max-w-md rounded-xl border border-border bg-card p-8 shadow-lg">
        <Tabs defaultValue={defaultTab} className="w-full">
          <TabsList className="mb-6 w-full">
            <TabsTrigger value="login" className="flex-1">Log in</TabsTrigger>
            <TabsTrigger value="signup" className="flex-1">Sign up</TabsTrigger>
          </TabsList>

          {/* LOGIN */}
          <TabsContent value="login">
            <form onSubmit={(e) => { e.preventDefault(); alert('Login demo') }}>
              <FieldGroup className="gap-4">
                <Field>
                  <FieldLabel>Email</FieldLabel>
                  <InputGroup>
                    <InputGroupAddon><Mail className="size-4" /></InputGroupAddon>
                    <InputGroupInput type="email" required />
                  </InputGroup>
                </Field>

                <Field>
                  <FieldLabel>Password</FieldLabel>
                  <InputGroup>
                    <InputGroupAddon><Lock className="size-4" /></InputGroupAddon>
                    <InputGroupInput type={showPassword ? 'text' : 'password'} required />
                    <InputGroupAddon onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <EyeOff /> : <Eye />}
                    </InputGroupAddon>
                  </InputGroup>
                </Field>

                <Button type="submit" className="w-full">Log in</Button>
              </FieldGroup>
            </form>
          </TabsContent>

          {/* SIGNUP */}
          <TabsContent value="signup">
            <form onSubmit={(e) => { e.preventDefault(); alert('Signup demo') }}>
              <FieldGroup className="gap-4">
                <Field>
                  <FieldLabel>Name</FieldLabel>
                  <InputGroup>
                    <InputGroupAddon><User className="size-4" /></InputGroupAddon>
                    <InputGroupInput type="text" required />
                  </InputGroup>
                </Field>

                <Field>
                  <FieldLabel>Email</FieldLabel>
                  <InputGroup>
                    <InputGroupAddon><Mail className="size-4" /></InputGroupAddon>
                    <InputGroupInput type="email" required />
                  </InputGroup>
                </Field>

                <Field>
                  <FieldLabel>Password</FieldLabel>
                  <InputGroup>
                    <InputGroupAddon><Lock className="size-4" /></InputGroupAddon>
                    <InputGroupInput type={showPassword ? 'text' : 'password'} required />
                  </InputGroup>
                </Field>

                <Button type="submit" className="w-full">Create Account</Button>
              </FieldGroup>
            </form>
          </TabsContent>
        </Tabs>
      </div>

      <Link href="/" className="mt-6 text-sm">Back to home</Link>
    </div>
  )
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginContent />
    </Suspense>
  )
}