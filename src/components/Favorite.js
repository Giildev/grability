import React from 'react';
import './styles.css'
import Shield from '../icons/favourites.png'
import FavoriteComic from './FavoriteComic'

class Favorite extends React.Component {

  render() {
    return (
      <div className="fav">
        <div className="fav__header">
          <img className="fav__Shield" src={Shield} alt=""/>
          <div className="fav__Text">My Favourites</div>
          <FavoriteComic comicImg={this.props.comicImg} comicDescription={this.props.comicDescription}/>
        </div>
      </div>
    );
  }
}

export default Favorite;
