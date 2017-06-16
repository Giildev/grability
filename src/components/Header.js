import React from 'react';
import SearchBar from './SearchBar'
import './styles.css'
import MarvelLogo from '../img/marvel-logo.png'

class Header extends React.Component {

  render() {
    return (
      <div className="header">
        <img className="header__marvel-logo" src={MarvelLogo} alt=""/>
        <SearchBar />
      </div>
    );
  }
}

export default Header;
