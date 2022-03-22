import { NavLink } from 'react-router-dom'
import { Home, Package, Briefcase } from 'lucide-react'

import { Logo } from '/src/components'

import { Nav, SidebarTab } from './sidebarStyle'

const Sidebar = () => {
  
  return <Nav>
    <Logo />
    <NavLink to='/'><SidebarTab><Home size={45} color='var(--icon-clr)' /></SidebarTab></NavLink>
    <NavLink to='/projects'><SidebarTab><Package size={45} color='var(--icon-clr)' /></SidebarTab></NavLink>
    <NavLink to='/clients'><SidebarTab><Briefcase size={45} color='var(--icon-clr)' /></SidebarTab></NavLink>
  </Nav>
}

export default Sidebar
