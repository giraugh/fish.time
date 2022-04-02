import { NavLink } from 'react-router-dom'

import { Logo, Waves } from '/src/components'
import { PageMain, ActionButton, Heading, ContentContainer } from './homeStyle'

const Home = () => <PageMain>
  <ContentContainer>
    <Heading>
      <Logo />
      <h1>Fish Time</h1>
    </Heading>
    <NavLink to='/app/'><ActionButton>Let&apos;s Get Tracking!</ActionButton></NavLink>
  </ContentContainer>
  <Waves active />
</PageMain>

export default Home
