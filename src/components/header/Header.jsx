import { NavLink } from 'react-router-dom';
import './header.scss';
import moment from 'moment';
import 'moment/locale/ru';
import hebrewDate from 'hebrew-date';
import Month from './Month';
import { TelegramLoginButton } from "react-social-login-buttons";

const Header = () => {
  const date = hebrewDate(new Date());

  return (
    <div className="header">
      <div className="header__box">
        <div className="header__link">
          <NavLink to="/" className="header__logo">
            Menorah
          </NavLink>
          <div className="header__date">
            <div className="header__date-today-ru">{moment().format('ddd,  DD MMMM')}</div>
            <div className="header__date-today-is">{date.date} {<Month month={date.month_name} />} {date.year}г.</div>
          </div>
        </div>        
        <div className="header__home">
          <div className="header__israel">House of Israel</div>
          <div className="header__ten">Return of the 10 tribes</div>
        </div>
        <TelegramLoginButton onClick={() => alert("Hello")} />
      </div>
    </div>
  );
};

export default Header;
