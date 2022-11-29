import './Links.scss';
import NavTora  from './NavTora';
import NavTanah from './NavTanah';

export const Navigation = () => {
  return (
      <div className="nav__book">
        <NavTora />
        <NavTanah />
      </div>
  );
};
