import React from 'react';
import SearchBar from './SearchBar'
import './styles.css'
import MarvelLogo from '../img/marvel-logo.png'
import GrabilityLogo from '../img/grability-logo.png'

class Footer extends React.Component {

  render() {
    return (
      <div className="footer">
        <span className="footer__text">Grability 2017 - Todos los derechos reservados</span>
        <img className="footer__logo" src={GrabilityLogo} alt=""/>
      </div>
    );
  }
}

export default Footer;
