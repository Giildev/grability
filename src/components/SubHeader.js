import React from 'react';
import './styles.css'
import Character from '../icons/characters.png'

class Header extends React.Component {

  render() {
    return (
      <div className="sub-header">
        <img className="sub-header__character-logo" src={Character} alt=""/>
        <span className="sub-header__character">Characters</span>
      </div>
    );
  }
}

export default Header;
