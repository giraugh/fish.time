import { useState, useEffect } from 'react'
import { MoreVertical } from 'lucide-react'
import { getClients } from '/src/services'
import { ScrollContainer, DetailButton } from '/src/components'

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
  const [clients, setClients] = useState([])

  useEffect(() => {
    getClients()
      .then(setClients)
  }, [])

  return <Container>
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
    <DetailButton />
  </ClientCard>
}

export default Clients

