import { useQuery } from 'urql'
import { Plus, MoreVertical } from 'lucide-react'

import { GET_MY_CLIENTS_QUERY } from '/src/graphql/queries'
import { Spinner, ScrollContainer, IconButton, Button, PageHeading } from '/src/components'

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

const Client = ({ name }) => {
  return <ClientCard>
    {name}
    <IconButton icon={<MoreVertical />} size={40} />
  </ClientCard>
}

export default Clients

