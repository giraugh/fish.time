import { useState } from 'react'
import { Package, Briefcase } from 'lucide-react'

import { Button } from '/src/components'

import Clients from '../Clients/Clients'
import Projects from '../Projects/Projects'
import { SideBySideButtons } from './timerResourcesStyle'

const TimerResources = () => {
  const [selected, setSelected] = useState('projects')

  return <>
    <SideBySideButtons $second={selected === 'clients'} $first={selected === 'projects'}>
      <Button icon={<Briefcase />} onClick={() => setSelected('projects')}>Projects</Button>
      <Button icon={<Package />} onClick={() => setSelected('clients')}>Clients</Button>
    </SideBySideButtons>
    {selected === 'clients'
      ? <Clients />
      : <Projects />
    }
  </>
}

export default TimerResources