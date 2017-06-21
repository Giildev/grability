import React from 'react';
import axios from 'axios';
import { PubKey, TS, Hash, UrlComic } from '../config.js'
import { Row, Col, Image } from 'react-bootstrap';
import './styles.css'
import Shield from '../icons/favourites.png'
import FavoriteComic from './FavoriteComic'

class Favorite extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      comic: []
    }
  }

  componentDidMount(){
    const comic = []

    axios.get(`${UrlComic}?apikey=${PubKey}&ts=${TS}&hash=${Hash}`)
      .then((data)=>{
        let results = data.data.data;
        results.results.map((data) =>{
          comic.push({
            comicImg: (data.images.length > 1) ? data.images[0].path+"/standard_fantastic."+data.images[0].extension : "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/standard_fantastic.jpg",
            comicDescription: (data.description) ? data.description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio voluptatem repellendus, vero accusantium eum vel excepturi blanditiis accusamus eveniet labore rem magnam sed expedita minus enim omnis voluptates iste doloribus."
          })
          return true;
        })
        this.setState({comic})
      })
      .catch((error) =>{
        console.log('err', error);
      })
  }

  renderComicList = () => {
    let comicImg = ""
    let comicDescription = ""
    return this.state.comic.map((data, index) => {
      comicImg = data.comicImg
      comicDescription = data.comicDescription
      for (var i = index; i < 7; i++) {
        return (
  				<FavoriteComic key={index} favComicImg={comicImg} favComicText={comicDescription}/>
  			)
      }
      return true;
    })
  }


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
            {this.renderComicList()}
          </Col>
          <Col xs={1} md={1}/>
        </Row>
      </div>
    );
  }
}

export default Favorite;
