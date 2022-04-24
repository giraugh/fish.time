import { useState } from 'react'
import { useQuery, useMutation } from 'urql'
import { Plus, MoreVertical, Pencil, Trash } from 'lucide-react'

import { GET_MY_CLIENTS_QUERY } from '/src/graphql/queries'
import { DELETE_CLIENT_MUTATION } from '/src/graphql/mutations'
import { Spinner, ScrollContainer, IconButton, Button, PageHeading, Dropdown } from '/src/components'

import { CreateClientModal } from './pages'
import {
  Container,
  Heading,
  HelpText,
  ClientCard,
  ClientListContainer,
} from './clientsStyle'

const Clients = () => {
  const [{ data, fetching }] = useQuery({ query: GET_MY_CLIENTS_QUERY })
  const clients = data?.myClients ?? []

  return fetching ? <Spinner /> : <Container>
    <PageHeading>
      <Heading>Clients</Heading>
      <Button data-a11y-dialog-show='create-client-dialog' icon={<Plus />}>New Client</Button>
      <CreateClientModal />
    </PageHeading>  
    <ScrollContainer>
      <HelpText>{!clients?.length && 'No clients here yet!'}</HelpText>
      <ClientListContainer>
        {clients.map(client => <Client key={client.id} {...client} />)}
      </ClientListContainer>
    </ScrollContainer>
  </Container>
}

const Client = ({ id, name }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const [, deleteClient] = useMutation(DELETE_CLIENT_MUTATION)
  const handleDeleteClient = () => {
    deleteClient({ input: { id }})
  }

  return <ClientCard>
    {name}
    <Dropdown
        openButton={<IconButton onClick={() => setMenuIsOpen(!menuIsOpen)} subtle size={35} icon={<MoreVertical />}/>} 
        isOpen={menuIsOpen}
        onClose={() => setMenuIsOpen(false)}
        small
      >
        <Button disabled subtle icon={<Pencil />}>Edit</Button>
        <Button danger icon={<Trash />} onClick={() => { handleDeleteClient(); setMenuIsOpen(false) }}>Delete</Button>
    </Dropdown>
  </ClientCard>
}

export default Clients

