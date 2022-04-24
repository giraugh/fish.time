import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import { useAuth } from '/src/hooks'
import { Logo, Waves, Onboarding, Field, Message } from '/src/components'

const Login = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [fireError, setFireError] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { isLoading, signIn, error: authError } = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm({ defaultValues: { email: '', password: '' }})

  // Determine previous page (if there was such a thing)
  const previousPage = location?.state?.from

  // Handle Logging In
  const onSubmit = async values => {
    setIsSubmitting(true)
    setFireError(null)
    signIn(values.email, values.password)
      .then(() => {
        setIsSubmitting(false)
        if (previousPage)
          navigate(previousPage)
      })
      .catch(() => {
        setFireError('Incorrect email or password')
        setIsSubmitting(false)
      })
  }

  // Were there errors from fire / from signing in?
  const error = fireError || authError?.message

  return <Onboarding.Main>
    <Onboarding.Content>
      <Onboarding.Heading>
        <Logo />
        <h1>Login</h1>
      </Onboarding.Heading>
      {isLoading ? <Spinner /> : <Onboarding.Form onSubmit={handleSubmit(onSubmit)}>
        {error && <Message>{error}</Message>}
        <Field
          {...register('email')}
          required
          type='email'
          label='Email'
          placeholder='trout@redsea.net'
          error={errors?.email?.message}/>
        <Field
          {...register('password')}
          required
          type='password'
          label='Password'
          error={errors?.password?.message}/>
        <Onboarding.Button disabled={isSubmitting || !isDirty}>Login</Onboarding.Button>
      </Onboarding.Form>}
    </Onboarding.Content>
    <Waves active sticky={false} />
  </Onboarding.Main>
}

export default Login
