import React from 'react';
import './styles.css'
import Delete from '../icons/btn-delete.png'

class FavoriteComic extends React.Component {

test = () => {
  console.log('press');
}

  render() {
    return (
      <div className="fav__front">
        <img className="fav__img" src={this.props.comicImg} alt=""/>
        <img className="fav__delete" onClick={event => this.test()} src={Delete} alt=""/>
        <div className="fav__subTitle">{this.props.comicDescription}</div>
      </div>
    );
  }
}

export default FavoriteComic;
