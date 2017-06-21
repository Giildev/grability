import React from 'react';
import './styles.css'
import { Image } from 'react-bootstrap';
import Delete from '../icons/btn-delete.png'

class FavoriteComic extends React.Component {

delete = () => {
  alert('Under Construction')
}

  render() {
    return (
      <div>
        <div className="fav__comic">
          <Image src={this.props.favComicImg} responsive/>
          <Image className="fav__delete" onClick={event => this.delete()} src={Delete} alt=""/>
          <div className="fav__subTitle">{this.props.favComicText}</div>
        </div>
      </div>
    );
  }
}

export default FavoriteComic;
