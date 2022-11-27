import { NavLink } from "react-router-dom";
import './nav.scss';

const Nav = () => {
  return (
    <div className="">
      <nav className="nav__all">
        <NavLink to='/tora' className='nav__item'>
          <button className="btn__link">
            БЕРЕШИТ
          </button>
        </NavLink>   
        <NavLink to='/tora/schmot' className='nav__item'>
          <button className="btn__link">
            ШМОТ
          </button>
        </NavLink>
        <NavLink to='/tora/vaikra' className='nav__item'>
          <button className="btn__link">
            ВАИКРА
          </button>
        </NavLink>
        <NavLink to='/tora/bemitbar' className='nav__item'>
          <button className="btn__link">
            БЕНИТБАР
          </button>
        </NavLink>
        <NavLink to='/tora/dvarim' className='nav__item'>
          <button className="btn__link">
            ДВАРИМ
          </button>
        </NavLink>
      </nav>      
    </div>
  );
};

export default  Nav;
