import React from 'react';
import { Link } from 'react-router';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
              <Link to="/legume">Home</Link>
          </li>
          <li>
              <Link to="/mesproduits">Mes Produits</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/map">Map</Link>
          </li>
            <li>
                <a href="/logout">logout</a>
            </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
