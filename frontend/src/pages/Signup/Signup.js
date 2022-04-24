import { useState, useEffect } from 'react'
import { useMutation } from 'urql'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { fire } from '/src/auth'

import { CREATE_USER_MUTATION } from '/src/graphql/mutations'
import { useAuth } from '/src/hooks'
import { Logo, Waves, Onboarding, Field, Message } from '/src/components'

const defaultValues = {
  displayName: '',
  email: '',
  password: '',
  passwordAgain: '',
}

const Signup = () => {
  const navigate = useNavigate()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { user: currentUser, signOut, setSigningUp } = useAuth()
  const [error, setError] = useState(null)

  // Mutation for creating a user
  const [, createUser] = useMutation(CREATE_USER_MUTATION)

  // Navigate away if already logged in
  useEffect(() => {
    if (currentUser && !isSubmitting) {
      navigate('/app')
    }
  }, [currentUser])

  const {
    register,
    handleSubmit,
    watch,
    setError: setFieldError,
    formState: { errors, isDirty },
  } = useForm({ defaultValues })

  const watchPassword = watch('password')

  const onSubmit = async values => {
    setIsSubmitting(true)
    setError(null)
    setSigningUp(true)
    try {
      // Create fire user
      const fireUserRecord = await fire
        .auth()
        .createUserWithEmailAndPassword(values.email, values.password)

      // Create user on backend
      const res = await createUser({ input: {
        id: fireUserRecord.user.uid,
        displayName: values.displayName,
        email: values.email,
      }})

      if (res?.data) {
        navigate('/app')
      } else {
        setError(res?.error?.message)
      }
    } catch (error) {
      // Is it an 'email taken' error?
      if (error.code && error.code === 'auth/email-already-in-use') {
        setFieldError('email', {
          type: 'manual',
          message: 'This email is already in use',
        })
        values.email = ''
      } else if (error.response && error.response.status === 400) {
        // Make sure we aren't logged into that account
        signOut()

        // Field errors
        setError(error.response.data.message)
        error.response.data.fieldErrors.forEach(fieldError => {
          setFieldError(fieldError.name, {
            type: 'manual',
            message: fieldError.message,
          })
        })
      } else {
        // General error
        console.error(error)
        setError('An error occured, please try again')
      }
    } finally {
      setIsSubmitting(false)
      setSigningUp(false)
    }
  }  

  return <Onboarding.Main>
    <Onboarding.Content>
      <Onboarding.Heading>
        <Logo />
        <h1>Fish Time</h1>
      </Onboarding.Heading>
      <Onboarding.Form onSubmit={handleSubmit(onSubmit)}>
        {error && <Message>{error}</Message>}
        <Field
        {...register('email', { required: 'You need an email' })} 
        error={errors?.email?.message}
        required type='email' label='Email' placeholder='trout@redsea.net' />
        <Field
        {...register('displayName', { required: 'Display name is required' })}
        error={errors?.displayName?.message}
        required type='text' label='Display Name' placeholder='CoolTrout123' />
        <Field
        {...register('password', { required: 'Password is required' })}
        error={errors?.password?.message}
        minLength={6}
        required type='password' label='Password' />
        <Field
        {...register('passwordAgain', {
          required: 'You must confirm your password',
          validate: v => v === watchPassword || 'Passwords must match'})}
        error={errors?.passwordAgain?.message}
        required type='password' label='Confirm Password' />
        <Onboarding.Button>Create Account</Onboarding.Button>
      </Onboarding.Form>
    </Onboarding.Content>
    <Waves active sticky={false} />
  </Onboarding.Main>
}

export default Signup