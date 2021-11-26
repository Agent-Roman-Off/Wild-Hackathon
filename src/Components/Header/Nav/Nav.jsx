import './Nav.scss';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="navigation">
      <input
        type="checkbox"
        className="navigation__checkbox"
        id="navi-toggle"
        name="navi-toggle"
      />
      <label htmlFor="navi-toggle" className="navigation__button">
        {/* <img src="" alt="" /> */}x
      </label>
      <div className="navigation__background">&nbsp;</div>
      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <Link to="/decade60s" className="navigation__link">
              60&#39;s
            </Link>
          </li>
          <li className="navigation__item">
            <Link to="/decade70s" className="navigation__link">
              70&#39;s
            </Link>
          </li>
          <li className="navigation__item">
            <Link to="/decade80s" className="navigation__link">
              80&#39;s
            </Link>
          </li>
          <li className="navigation__item">
            <Link to="/decade90s" className="navigation__link">
              90&#39;s
            </Link>
          </li>
          <li className="navigation__item">
            <Link to="/decade00s" className="navigation__link">
              00&#39;s
            </Link>
          </li>
          <li className="navigation__item">
            <Link to="/decade10s" className="navigation__link">
              10&#39;s
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
