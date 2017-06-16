import React, {Component} from 'react';
import axios from 'axios';
import CryptoJS from 'crypto-js';
import '../App.css';

class Marvel extends Component {

  constructor() {
    super();
    this.state = {
      heroe: ""
    };
  }

  render() {
    const public_key = "30f53129cad6ab1e89e406f839356890";
    const private_key = "b732db679c3e897f041f7f4b82e77cdc6777b58a";
    const ts = new Date().getTime();
    const hash = CryptoJS.MD5(ts + private_key + public_key).toString();
    const url = "http://gateway.marvel.com/v1/public/comics"

    axios.get(url+"?apikey="+public_key+"&ts="+ts+"&hash="+hash+"")
    .then(function(response) {
      console.log('res',response.data.data.results);
    }).catch(function(error) {
      console.log('err',error);
    });

    return (
      <div>
        <h1>{this.state.heroe}</h1>
      </div>
    );
  }
}

export default Marvel;
