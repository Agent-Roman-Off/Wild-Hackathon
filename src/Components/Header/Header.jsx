import Logo from 'Components/Logo/Logo';
import './Header.scss';

import Nav from './Nav/Nav';

const Header = () => {
  return (
    <header className="Header">
      <div className="Header__logo-box">
        <Logo />
      </div>
      <Nav />
    </header>
  );
};
export default Header;
