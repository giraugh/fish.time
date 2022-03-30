import { NavLink } from 'react-router-dom'
import { Timer, Package, Briefcase, PieChart } from 'lucide-react'

import { Logo } from '/src/components'

import { Nav, SidebarTab } from './navbarStyle'

const ICON_SIZE = 35

const Navbar = () => {
  
  return <Nav>
    <Logo />
    <NavLink to='/'><SidebarTab><Timer size={ICON_SIZE} color='var(--icon-clr)' /></SidebarTab></NavLink>
    <NavLink to='/projects'><SidebarTab><Package size={ICON_SIZE} color='var(--icon-clr)' /></SidebarTab></NavLink>
    <NavLink to='/clients'><SidebarTab><Briefcase size={ICON_SIZE} color='var(--icon-clr)' /></SidebarTab></NavLink>
    <NavLink to='/stats'><SidebarTab><PieChart size={ICON_SIZE} color='var(--icon-clr)' /></SidebarTab></NavLink>
  </Nav>
}

export default Navbar
