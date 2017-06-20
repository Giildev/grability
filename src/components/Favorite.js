import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import './styles.css'
import Shield from '../icons/favourites.png'
import FavoriteComic from './FavoriteComic'

class Favorite extends React.Component {

  render() {
    return (
      <div>
        <Row className="fav">
          <Col xs={2} md={2}>
            <Image className="fav__shield" src={Shield} alt=""/>
          </Col>
          <Col xs={10} md={10}>
            <div className="fav__Text">My Favourites</div>
          </Col>
        </Row>
        <Row>
          <Col xs={1} md={1}/>
          <Col xs={10} md={10}>
            <FavoriteComic />
          </Col>
          <Col xs={1} md={1}/>
        </Row>
      </div>
    );
  }
}

export default Favorite;
