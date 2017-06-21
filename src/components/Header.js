import React from 'react';
import SearchBar from './SearchBar'
import { Row, Col, Image} from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './styles.css'
import MarvelLogo from '../img/marvel-logo.png'

class Header extends React.Component {

  render() {
    return (
        <Row className="header">
          <Col xs={4} md={4}>
            <Link to="/">
              <Image className="header__marvel-logo" src={MarvelLogo} alt="" responsive/>
            </Link>
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
