import React from 'react';
import './styles.css'
import IronMan from '../img/ironman.jpg'

class Box extends React.Component {

  render() {
    return (      
      <div className="box">
        <div className="box__circle" >
          <img className="box__img" src={IronMan} alt=""/>
        </div>
        <div className="box__title">Iron Man</div>
        <p className="box__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <div className="box__related">Related Comics</div>
        <div className="box__related-comic-container">
          <div className="box__related-comic"> Iron Man Comic 1 </div>
        </div>
        <div className="box__related-comic-container">
          <div className="box__related-comic"> Iron Man Comic 2 </div>
        </div>
        <div className="box__related-comic-container">
          <div className="box__related-comic"> Iron Man Comic 3 </div>
        </div>
        <div className="box__related-comic-container">
          <div className="box__related-comic"> Iron Man Comic 4 </div>
        </div>
      </div>
    );
  }
}

export default Box;
