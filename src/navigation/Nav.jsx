import { NavLink } from "react-router-dom";
import './nav.scss';

const Nav = () => {
  return (
    <div>
      <nav className="nav__all">
        <NavLink to='/tora' className='nav__item'>
          <div className="btn__link">
            БЕРЕШИТ
          </div>
        </NavLink>   
        <NavLink to='/tora/schmot' className='nav__item'>
          <div className="btn__link">
            ШМОТ
          </div>
        </NavLink>
        <NavLink to='/tora/vaikra' className='nav__item'>
          <div className="btn__link">
            ВАИКРА
          </div>
        </NavLink>
        <NavLink to='/tora/bemitbar' className='nav__item'>
          <div className="btn__link">
            БЕНИТБАР
          </div>
        </NavLink>
        <NavLink to='/tora/dvarim' className='nav__item'>
          <div className="btn__link">
            ДВАРИМ
          </div>
        </NavLink>
        
      </nav>      
    </div>
  );
};

export default  Nav;
