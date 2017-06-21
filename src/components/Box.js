import React from 'react';
import axios from 'axios';
import { Row, Col, Image, Button, Modal, Alert } from 'react-bootstrap';
import { PubKey, TS, Hash, UrlCharacters } from '../config.js'
import Cart from '../icons/shopping-cart-primary.png'
import ShieldPrimary from '../icons/btn-favourites-primary.png'
import './styles.css'

class Box extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
       showModal: false,
       id: "",
       comicName: "",
       comicImg: "",
       comicPrice: "",
       comicDescription: "",
       alert: false,
       favourite: false,
       add: "Add to Favourite",
       favouriteClass: "modal__favorite-Default"
    } ;
  }

  close = () => {
    this.setState({ showModal: false });
  }

  open = (data) => {

    axios.get(`${UrlCharacters}/${data}/comics?apikey=${PubKey}&ts=${TS}&hash=${Hash}`)
      .then((data)=>{
        let results = data.data.data.results[0];
        this.setState({
          comicName: (results) ? results.title : "No Title Available",
          comicImg: (results) ? results.images[0].path+"/standard_fantastic."+results.images[0].extension : "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/standard_fantastic.jpg",
          comicPrice: (results) ? results.prices[0].price : "0.00",
          comicDescription: (results) ? results.description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio voluptatem repellendus, vero accusantium eum vel excepturi blanditiis accusamus eveniet labore rem magnam sed expedita minus enim omnis voluptates iste doloribus."
        })
      })
      .catch((data) =>{
        console.log('err', data);
      })
    this.setState({ showModal: true, id: data });
  }

  alert = () => {
    (!this.state.alert) ? this.setState ({alert: true}) : this.setState ({alert: false})
  }

  addFavorite = () =>{
    (!this.state.favourite)
      ? this.setState ({favourite: true, add: "Add to Favourite", favouriteClass: "modal__favorite-Default"})
      : this.setState ({favourite: false, add: "Added to Favourite", favouriteClass: "modal__favorite-Active"})
  }


  render() {
    let ComicRelated = ""
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
                <p className="box__description">{this.props.heroeDescription}</p>
              </Col>
            </Row>
          </Col>
          <Row>
            <Col xs={6} md={6}>
              <h4 className="box__related">RELATED COMICS</h4>
            </Col>
            <Col xs={6} md={6}>
              <Button onClick={e => this.open(e.target.id)} id={this.props.id} className="box__viewMore" bsSize="xsmall">View More</Button>
            </Col>
          </Row>
          <Row>
          <Col className="box__list-padding" xs={6} md={12}>
              {
                (this.props.heroeComics)
                ? this.props.heroeComics.map((data, index) => {
                  for (var i = index; i < 4; i++) {
                    (data !== false)
                    ? ComicRelated = (<div className="box__comic-list" key={index}>{data}</div>)
                    : ComicRelated = (<div className="box__comic-list" key={index}>Related Comic Name Two Lines</div>)
                    return (
                      <Col key={index} xs={6} md={6}>
                        {ComicRelated}
                      </Col>
                    )
                  }
                  return true;
                })
                : ""
              }
          </Col>
          </Row>
          {/* Modal */}

          <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Body>
            <Row>
              <Col xs={4} md={4}>
                <Image src={this.state.comicImg} alt="" responsive/>
              </Col>
              <Row>
                <Col className="modal__title" xs={6} md={6}>
                  {this.state.comicName}
                </Col>
                <Col className="modal__description" xs={6} md={6}>
                  {this.state.comicDescription}
                </Col>
              </Row>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Row>
              <Col onClick={e => this.addFavorite()} className={this.state.favouriteClass} xs={6} md={6}>
                <Col style={{height: "100%"}} xs={4} md={4}>
                  <Image style={{paddingTop: "5px"}} src={ShieldPrimary} alt="" responsive/>
                </Col>
                <Col xs={8} md={8}>
                  {this.state.add}
                </Col>
              </Col>
              <Col onClick={e => this.alert()} className="modal__close" xs={6} md={6}>
                <Col style={{height: "100%"}} xs={2} md={2}>
                  <Image src={Cart} alt=""/>
                </Col>
                <Col xs={8} md={8}>
                  Buy for ${this.state.comicPrice}
                </Col>
              </Col>
            </Row>
            {(this.state.alert)
              ? <Alert bsStyle="warning">
                  <strong>Oops!</strong> - Under Construction
                </Alert>
              : ""
            }
          </Modal.Footer>
        </Modal>
        </Col>

    );
  }
}

export default Box;
