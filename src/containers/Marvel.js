import React, {Component} from 'react';
// import axios from 'axios';
// import CryptoJS from 'crypto-js';

import Header from '../components/Header'
import '../App.css';

class Marvel extends Component {

  handleTermChange(term) {
    console.log(term);
  }

  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

export default Marvel;
