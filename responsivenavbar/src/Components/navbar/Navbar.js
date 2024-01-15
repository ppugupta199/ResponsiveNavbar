import { useState } from 'react';
import { Menulist } from './Menulist';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const menulist = Menulist.map(({ url, title }, index) => {
    return (
      <li key={index}>
        <NavLink exact to={url} activeClassName='active'>
          {title}
        </NavLink>
      </li>
    );
  });
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <nav>
      <div className='logo'>
        VPN <font>Lab</font>
      </div>
      <div className='menu-icon' onClick={handleClick}>
        {/* <FontAwesomeIcon icon={clicked ? faTimes : faBars} /> */}
        <FontAwesomeIcon
          icon={clicked ? faTimes : faBars}
          className={clicked ? 'faTimes' : 'faBars'}
        />
      </div>
      <ul className={clicked ? 'menu-list' : 'menu-list close'}>{menulist}</ul>
    </nav>
  );
};

export default Navbar;
