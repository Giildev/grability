import React, {Component} from 'react';
import axios from 'axios';
import CryptoJS from 'crypto-js';

import Header from '../components/Header'
import '../App.css';

const public_key = "30f53129cad6ab1e89e406f839356890";
const private_key = "b732db679c3e897f041f7f4b82e77cdc6777b58a";
const ts = new Date().getTime();
const hash = CryptoJS.MD5(ts + private_key + public_key).toString();
const url = "http://gateway.marvel.com/v1/public/comics"

class Marvel extends Component {

  constructor(props) {
    super(props);
    this.state = {
      test: []
    };
  }

  apiCall = () => {
   axios.get(url+"?apikey="+public_key+"&ts="+ts+"&hash="+hash+"")
   .then((response) => {
     let bla = response.data.data.results;
     bla.map((data) => {
       return this.setState({test: data.id})
     })
   }).catch((error) => {
     console.log('err',error);
   });
  }

  render() {
    return (
      <div>
        <Header />
        <div>
          <button className="test" onClick={event => this.apiCall()}>Test</button>
          <ul>
            <li>{this.state.test}</li>
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Marvel;
