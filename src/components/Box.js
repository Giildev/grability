import React from 'react';
import { Row, Col, Image, Button } from 'react-bootstrap';
import './styles.css'

class Box extends React.Component {

  render() {
    return (
        <Col className="box" xs={12} md={5}>
          <Col xs={6} md={6}>
            <Image className="box__img" src={this.props.heroeImg} alt="" circle/>
          </Col>
          <Col xs={6} md={6}>
            <Row>
              <Col xs={12} md={12}>
                <h4 className="box__title">{this.props.heroeName}</h4>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12}>
                <p>{this.props.heroeDescription}</p>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12}>
                <Button className="box__viewMore" bsStyle="primary" bsSize="xsmall">View More</Button>
              </Col>
            </Row>
          </Col>
          <Row>
            <Col xs={12} md={12}>
              <h4 className="box__related">RELATED COMICS</h4>
            </Col>
          </Row>
          <Row>
          <Col xs={6} md={12}>
              {
                (this.props.heroeComics)
                ? this.props.heroeComics.map((data, index) => {
                  for (var i = index; i < 4; i++) {
                    return (
                      <Col xs={6} md={6}>
                        <div className="box__comic-list" key={index}>{data}</div>
                      </Col>
                    )
                  }
                })
                : ""
              }
          </Col>
          </Row>
        </Col>

      // <div className="box">
      //   <div>
      //     <div className="box__circle">
      //       <img className="box__img" src={this.props.heroeImg} alt=""/>
      //     </div>
      //     <div className="box__related">Related Comics</div>
      //   </div>
      //
      //   <div>
      //     <div className="box__title">
      //       {this.props.heroeName}
      //     </div>
      //     <div className="box__description">
      //       {this.props.heroeDescription}
      //     </div>
      //   </div>
      // </div>

      // <div className="box">
      //   <div className="box__container">
      //     <div className="box__circle" >
      //       <img className="box__img" src={this.props.heroeImg} alt=""/>
      //     </div>
      //     <div className="box__title">{this.props.heroeName}</div>
      //   </div>
      //   <p className="box__description">{this.props.heroeDescription}</p>
      //   <div className="box__related">Related Comics</div>
        // {this.props.heroeComics.map((data, index) => {
        //   if (data) {
        //     for (var i = index; i < 4; i++) {
        //       return (
        //         <div key={index} className="box__related-comic-container">
        //           <div className="box__related-comic"> {data} </div>
        //         </div>
        //       )
        //     }
        //   }
        // })}
      // </div>
    );
  }
}

export default Box;
