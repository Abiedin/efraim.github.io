import { NavLink } from "react-router-dom";
import './nav.scss';

export const Navigation = () => {
  const NavLinkStyles = ({ isActive }) => {
    return{
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration: isActive ? 'none' : 'underline',
    }
  }

  return (
    <nav className="nav__all">
      <NavLink style={NavLinkStyles} to='/tora' className='nav__item'>
        ТОРА
      </NavLink>   
      <NavLink  style={NavLinkStyles} to='/tanah' className='nav__item'> 
        ТАНАХ
      </NavLink>
    </nav>
  )
}