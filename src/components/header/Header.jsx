import { NavLink } from 'react-router-dom';
import './header.scss';
import moment from 'moment';
import 'moment/locale/ru';
import hebrewDate from 'hebrew-date';
import Month from './Month';

const Header = () => {
  const date = hebrewDate(new Date());

  return (
    <header className="header">
      <div className="header__box">
          <div className="header__date">
            <div className="header__date-today-ru">{moment().format('ddd,  DD MMMM YYYY')}</div>
            <div className="header__date-today-is">{date.date} {<Month month={date.month_name} />} {date.year}г.</div>
          </div>
          <NavLink to="/" className="header__logo">
            <div className="header__israel">House of Israel</div>
            <div className="header__ten">Return of the 10 tribes</div>
          </NavLink>
      </div>
      <div className="header__soc">
        <a href="https://t.me/+t9OAfLqYtDE2Zjcy"  title="Telegram" target="_blank"><img src="/images/telegram.png" /></a>
      </div>
    </header>
  );
};

export default Header;
