import './Header.scss';

import Nav from './Nav/Nav';

const Header = () => {
  return (
    <header className="Header">
      <div className="Header__logo-box">
        <img
          src="https://i.gifer.com/VJi.gif"
          alt="logo"
          className="Header__logo"
        />
      </div>
      <Nav />
    </header>
  );
};
export default Header;
