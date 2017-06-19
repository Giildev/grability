import React from 'react';
import './styles.css'
import Delete from '../icons/btn-delete.png'
import Front from '../img/ironmanCover.jpg'

class FavoriteComic extends React.Component {

test = () => {
  console.log('press');
}

  render() {
    return (
      <div className="fav__front">
        <img className="fav__img" src={Front} alt=""/>
        <img className="fav__delete" onClick={event => this.test()} src={Delete} alt=""/>
        <div className="fav__subTitle">Comic title Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
      </div>
    );
  }
}

export default FavoriteComic;
