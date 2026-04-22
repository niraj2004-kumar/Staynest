'use client'

import { useState } from 'react'
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

export default function LoginPage() {
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
            <TabsTrigger value="login" className="flex-1">
              Log in
            </TabsTrigger>
            <TabsTrigger value="signup" className="flex-1">
              Sign up
            </TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <div className="mb-6 text-center">
              <h1 className="text-2xl font-bold text-foreground">Welcome back</h1>
              <p className="mt-1 text-muted-foreground">
                Log in to your account to continue
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault()
                alert('Login functionality would be implemented with a database integration')
              }}
            >
              <FieldGroup className="gap-4">
                <Field>
                  <FieldLabel>Email</FieldLabel>
                  <InputGroup>
                    <InputGroupAddon>
                      <Mail className="size-4 text-muted-foreground" />
                    </InputGroupAddon>
                    <InputGroupInput
                      type="email"
                      placeholder="you@example.com"
                      required
                    />
                  </InputGroup>
                </Field>

                <Field>
                  <FieldLabel>Password</FieldLabel>
                  <InputGroup>
                    <InputGroupAddon>
                      <Lock className="size-4 text-muted-foreground" />
                    </InputGroupAddon>
                    <InputGroupInput
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter your password"
                      required
                    />
                    <InputGroupAddon
                      className="cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="size-4 text-muted-foreground" />
                      ) : (
                        <Eye className="size-4 text-muted-foreground" />
                      )}
                    </InputGroupAddon>
                  </InputGroup>
                </Field>

                <div className="flex items-center justify-between">
                  <Field orientation="horizontal" className="gap-2">
                    <Checkbox id="remember" />
                    <FieldLabel
                      htmlFor="remember"
                      className="text-sm font-normal"
                    >
                      Remember me
                    </FieldLabel>
                  </Field>
                  <Button variant="link" className="h-auto p-0 text-sm">
                    Forgot password?
                  </Button>
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Log in
                </Button>
              </FieldGroup>
            </form>

            <div className="relative my-6">
              <Separator />
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-card px-2 text-sm text-muted-foreground">
                or
              </span>
            </div>

            <Button variant="outline" className="w-full" size="lg">
              Continue with Google
            </Button>
          </TabsContent>

          <TabsContent value="signup">
            <div className="mb-6 text-center">
              <h1 className="text-2xl font-bold text-foreground">
                Create an account
              </h1>
              <p className="mt-1 text-muted-foreground">
                Join StayNest to start booking
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault()
                alert('Signup functionality would be implemented with a database integration')
              }}
            >
              <FieldGroup className="gap-4">
                <Field>
                  <FieldLabel>Full name</FieldLabel>
                  <InputGroup>
                    <InputGroupAddon>
                      <User className="size-4 text-muted-foreground" />
                    </InputGroupAddon>
                    <InputGroupInput
                      type="text"
                      placeholder="John Doe"
                      required
                    />
                  </InputGroup>
                </Field>

                <Field>
                  <FieldLabel>Email</FieldLabel>
                  <InputGroup>
                    <InputGroupAddon>
                      <Mail className="size-4 text-muted-foreground" />
                    </InputGroupAddon>
                    <InputGroupInput
                      type="email"
                      placeholder="you@example.com"
                      required
                    />
                  </InputGroup>
                </Field>

                <Field>
                  <FieldLabel>Password</FieldLabel>
                  <InputGroup>
                    <InputGroupAddon>
                      <Lock className="size-4 text-muted-foreground" />
                    </InputGroupAddon>
                    <InputGroupInput
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Create a password"
                      required
                    />
                    <InputGroupAddon
                      className="cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="size-4 text-muted-foreground" />
                      ) : (
                        <Eye className="size-4 text-muted-foreground" />
                      )}
                    </InputGroupAddon>
                  </InputGroup>
                </Field>

                <Field orientation="horizontal" className="gap-2">
                  <Checkbox id="terms" required />
                  <FieldLabel htmlFor="terms" className="text-sm font-normal">
                    I agree to the{' '}
                    <Button variant="link" className="h-auto p-0 text-sm">
                      Terms of Service
                    </Button>{' '}
                    and{' '}
                    <Button variant="link" className="h-auto p-0 text-sm">
                      Privacy Policy
                    </Button>
                  </FieldLabel>
                </Field>

                <Button type="submit" className="w-full" size="lg">
                  Create account
                </Button>
              </FieldGroup>
            </form>

            <div className="relative my-6">
              <Separator />
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-card px-2 text-sm text-muted-foreground">
                or
              </span>
            </div>

            <Button variant="outline" className="w-full" size="lg">
              Continue with Google
            </Button>
          </TabsContent>
        </Tabs>
      </div>

      <p className="mt-6 text-center text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground hover:underline">
          Back to home
        </Link>
      </p>
    </div>
  )
}
