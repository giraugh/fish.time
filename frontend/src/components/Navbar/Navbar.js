import { NavLink } from 'react-router-dom'
import { Timer, Package, Briefcase, PieChart, LogOut } from 'lucide-react'

import { Logo, Mobile, Desktop } from '/src/components'

import { Nav, SidebarTab } from './navbarStyle'

const ICON_SIZE = 35

const Navbar = () => {
  
  return <Nav>
    <Logo />
    <NavLink to='/app/timers'><SidebarTab><Timer size={ICON_SIZE} color='var(--icon-clr)' /></SidebarTab></NavLink>
    <Mobile><NavLink to='/app/resources'><SidebarTab><Package size={ICON_SIZE} color='var(--icon-clr)' /></SidebarTab></NavLink></Mobile>
    <Desktop><NavLink to='/app/projects'><SidebarTab><Package size={ICON_SIZE} color='var(--icon-clr)' /></SidebarTab></NavLink></Desktop>
    <Desktop><NavLink to='/app/clients'><SidebarTab><Briefcase size={ICON_SIZE} color='var(--icon-clr)' /></SidebarTab></NavLink></Desktop>
    <NavLink to='/app/reports'><SidebarTab><PieChart size={ICON_SIZE} color='var(--icon-clr)' /></SidebarTab></NavLink>
    <NavLink to='/app/logout'><SidebarTab><LogOut size={ICON_SIZE} color='var(--icon-clr)' /></SidebarTab></NavLink>
  </Nav>
}

export default Navbar
