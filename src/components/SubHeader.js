import React from 'react';
import './styles.css'
import Character from '../icons/characters.png'
import { Row, Col, Image} from 'react-bootstrap';


class Header extends React.Component {

  render() {
    return (
      <div className="sub-header">
        <Row className="sub-header__padding">
          <Col xs={1} md={1}> </Col>
          <Col xs={1} md={1}>
            <Image src={Character}></Image>
          </Col>
          <Col xs={10} md={10}>
            <span className="sub-header__character">Characters</span>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Header;
