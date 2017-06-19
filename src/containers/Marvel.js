import React, {Component} from 'react';
import axios from 'axios';
import CryptoJS from 'crypto-js';

import Header from '../components/Header'
import SubHeader from '../components/SubHeader'
import Box from '../components/Box'
import Favorite from '../components/Favorite'
import Footer from '../components/Footer'
import '../App.css';

const public_key = "30f53129cad6ab1e89e406f839356890";
const private_key = "b732db679c3e897f041f7f4b82e77cdc6777b58a";
const ts = new Date().getTime();
const hash = CryptoJS.MD5(ts + private_key + public_key).toString();
const url = "http://gateway.marvel.com/v1/public/characters"

let id = [];
let name = [];
let img = [];

class Marvel extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Heroe: {
        id: {},
        name: {},
        img: {}
      }
    };
  }

  componentDidMount() {
    axios.get(url+"?apikey="+public_key+"&ts="+ts+"&hash="+hash+"")
    .then((response) => {
      let result = response.data.data.results;
      console.log(this.props);
      result.map((data) => {
        id.push(data.id)
        name.push(data.name)
        img.push(data.thumbnail.path+"/standard_fantastic."+data.thumbnail.extension)
        return this.setState(
          {
            Heroe:
            {
              id: id,
              name: name,
              img: img
            }
          }
        )
      })
    }).catch((error) => {
      console.log('err',error);
    });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container-list">
          <SubHeader />
          <div>
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
          </div>
        </div>
        <div className="container-favorite">
          <Favorite />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Marvel;
