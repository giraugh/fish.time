import { NavLink } from 'react-router-dom'

import { Logo, Waves, Onboarding } from '/src/components'
import { Vertical } from './homeStyle'

const Home = () => <Onboarding.Main>
  <Onboarding.Content>
    <Onboarding.Heading>
      <Logo />
      <h1>Fish Time</h1>
    </Onboarding.Heading>
    <Vertical>
      <NavLink to='/signup/'><Onboarding.Button>Let&apos;s Get Tracking!</Onboarding.Button></NavLink>
      <NavLink to='/login/'>I already have an account</NavLink>
    </Vertical>
  </Onboarding.Content>
  <Waves active />
</Onboarding.Main>

export default Home