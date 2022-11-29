import './Links.scss';
import { NavLink } from 'react-router-dom';

const NavTanah = () => {
  return (
    <div className="btn__nav">
      <NavLink to='/tanah'>
        <button   className="btn__nav-bock-tanah">
          TАНАХ
        </button>
      </NavLink>
    </div>
  );
};

export default NavTanah;
