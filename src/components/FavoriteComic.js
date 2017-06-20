import React from 'react';
import './styles.css'
import { Image } from 'react-bootstrap';
import Delete from '../icons/btn-delete.png'

class FavoriteComic extends React.Component {

test = () => {
  console.log('press');
}

  render() {
    return (
      <div>
        <div className="fav__comic">
          <Image src="http://media.comicbook.com/uploads1/2015/01/spider-man-1-cover-117628.jpg" responsive/>
          <Image className="fav__delete" onClick={event => this.test()} src={Delete} alt=""/>
          <div className="fav__subTitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        </div>
      </div>
    );
  }
}

export default FavoriteComic;
