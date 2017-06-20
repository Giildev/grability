import React from 'react';
import './styles.css'
import { Col, Image } from 'react-bootstrap';
import GrabilityLogo from '../img/grability-logo.png'

class Footer extends React.Component {

  render() {
    return (

      <Col className="footer">
        <Col xs={1} md={1}/>
        <Col className="footer__text" xs={5} md={8}>
          Grability 2017 - Todos los derechos reservados
        </Col>
        <Col className="footer__logo" xs={5} md={2}>
          <Image src={GrabilityLogo} alt=""/>
        </Col>
        <Col xs={1} md={1}/>
      </Col>
    );
  }
}

export default Footer;
