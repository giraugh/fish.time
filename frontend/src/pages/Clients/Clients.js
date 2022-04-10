import { useQuery } from 'urql'
import { MoreVertical } from 'lucide-react'

import { GET_MY_CLIENTS_QUERY } from '/src/graphql/queries'
import { Spinner, ScrollContainer, IconButton } from '/src/components'

import {
  Container,
  HeadingContainer,
  Heading,
  Button,
  HelpText,
  ClientCard,
  ClientListContainer,
} from './clientsStyle'

const Clients = () => {
  const [{ data, fetching }] = useQuery({ query: GET_MY_CLIENTS_QUERY })
  const clients = data?.myClients ?? []

  return fetching ? <Spinner /> : <Container>
    <HeadingContainer>
      <Heading>Clients</Heading>
      <Button>New Client</Button>
    </HeadingContainer>  
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

