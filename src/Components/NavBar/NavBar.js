import './NavBar.scss'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className='nav-bar'>
      <h1>REFUGE</h1>
      <NavLink className='nav-link' to='/provideAid'>Provide Aid</NavLink>
      <NavLink className='nav-link' to='/ourMission'>Our Mission</NavLink>
    </nav>
  )
}