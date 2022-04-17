import { useRef } from 'react'
import { useForm } from 'react-hook-form'
import { useQuery, useMutation } from 'urql'

import { GET_MY_CLIENTS_QUERY } from '/src/graphql/queries'
import { CREATE_PROJECT_MUTATION } from '/src/graphql/mutations'
import { Modal, Button, Field, Select } from '/src/components'

const CreateProjectModal = () => {
  const modalRef = useRef()
  const {
    register,
    handleSubmit,
    reset,
    control,
    getValues,
    formState: { errors, isDirty },
  } = useForm()

  // Get clients query
  const [clientRes, _] = useQuery({ query: GET_MY_CLIENTS_QUERY })
  const clients = clientRes.data?.myClients ?? []

  // Create project mutation
  const [{ fetching: creatingProject }, createProject] = useMutation(CREATE_PROJECT_MUTATION)

  // Create project on submit
  const onSubmit = async values => {
    await createProject({ input: {
      name: values.name,
      clientID: values.client ? Number(values.client) : null,
    }})
    modalRef?.current.hide()
  }

  return <Modal
    title="Create a New Project"
    id="create-project-dialog"
    modalRef={instance => modalRef.current = instance}
    actions={(closeAttr, instance) => (<>
      <Button {...closeAttr} secondary>Cancel</Button>
      <Button
        type='submit'
        form='create-project-form'
        loading={creatingProject}
        disabled={creatingProject}
      >Create Project</Button>
    </>)}>
      <form onSubmit={handleSubmit(onSubmit)} id='create-project-form'>
        <Field
          label='Project Name'
          type='text'
          placeholder='My Cool Project'
          required
          {...register('name')}/>
      
        <Field.Label htmlFor='client'>Client</Field.Label>
        <Select id='client' {...register('client')}>
          <option value={''}>No Client</option>
          {clients.map(client => <option key={client.id} value={client.id}>
            {client.name}
          </option>)}
        </Select>
      </form>
  </Modal>
}

export default CreateProjectModal