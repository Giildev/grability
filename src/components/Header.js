import React from 'react';
import SearchBar from './SearchBar'
import { Row, Col, Image} from 'react-bootstrap';
import './styles.css'
import MarvelLogo from '../img/marvel-logo.png'

class Header extends React.Component {

  render() {
    return (
        <Row className="header">
          <Col xs={4} md={4}>
            <Image className="header__marvel-logo" src={MarvelLogo} alt="" responsive/>
          </Col>
          <Col className="header__search-margin" xs={4} md={4}>
            <SearchBar />
          </Col>
          <Col xs={4} md={4}></Col>
        </Row>
    );
  }
}

export default Header;
