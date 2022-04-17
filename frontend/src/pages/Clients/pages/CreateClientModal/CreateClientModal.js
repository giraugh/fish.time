import { useRef } from 'react'
import { useForm } from 'react-hook-form'
import { useQuery, useMutation } from 'urql'

import { CREATE_CLIENT_MUTATION } from '/src/graphql/mutations'
import { Modal, Button, Field, Select } from '/src/components'

const CreateClientModal = () => {
  const modalRef = useRef()
  const {
    register,
    handleSubmit,
    reset,
    control,
    getValues,
    formState: { errors, isDirty },
  } = useForm()

  // Create project mutation
  const [{ fetching: creatingClient }, createClient] = useMutation(CREATE_CLIENT_MUTATION)

  // Create project on submit
  const onSubmit = async values => {
    await createClient({ input: {
      name: values.name,
    }})
    modalRef?.current.hide()
  }

  return <Modal
    title="Create a New Client"
    id="create-client-dialog"
    modalRef={instance => modalRef.current = instance}
    actions={(closeAttr, instance) => (<>
      <Button {...closeAttr} secondary>Cancel</Button>
      <Button
        type='submit'
        form='create-client-form'
        loading={creatingClient}
        disabled={creatingClient}
      >Create Client</Button>
    </>)}>
      <form onSubmit={handleSubmit(onSubmit)} id='create-client-form'>
        <Field
          label='Client Name'
          type='text'
          placeholder='My Cool Client'
          required
          {...register('name')}/>
      </form>
  </Modal>
}

export default CreateClientModal