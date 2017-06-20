import React, {Component} from 'react';
import axios from 'axios';
import CryptoJS from 'crypto-js';

import Header from '../components/Header'
import SubHeader from '../components/SubHeader'
import Box from '../components/Box'
import Favorite from '../components/Favorite'
import Footer from '../components/Footer'
import '../App.css';

class Marvel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			heroe: [],
      comicImg: '',
      comicDescription: 'lorem'
		}
	}

	componentDidMount() {
		const public_key = "30f53129cad6ab1e89e406f839356890";
		const private_key = "b732db679c3e897f041f7f4b82e77cdc6777b58a";
		const ts = new Date().getTime();
		const hash = CryptoJS.MD5(ts + private_key + public_key).toString();
		const url = "http://gateway.marvel.com/v1/public/characters"
		const heroe = []

		axios.get(`${url}?apikey=${public_key}&ts=${ts}&hash=${hash}`).then((response) => {
			let result = response.data.data.results;
			result.map((data) => {
				heroe.push({
					id: data.id,
					name: data.name,
					img: data.thumbnail.path + "/standard_fantastic." + data.thumbnail.extension,
          description: data.description,
          comics: data.comics
				});
				return true;
			})
			this.setState({heroe})
		}).catch((error) => {
			console.log('err', error);
		});
	}

	renderHeroeList = () => {
    let Comics = ""
    let Description = ""
		return this.state.heroe.map((data, index) => {
      (data.description) ? Description = data.description : Description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic id culpa est illo, voluptatum quo deserunt cum nulla iure temporibus repellat impedit velit consequuntur harum necessitatibus, odio, adipisci veritatis mollitia.";
      (data.comics.available) ? Comics = data.comics.items.map((data) => { return data.name }) : Comics = false
      for (var i = index; i < 10; i++) {
        return (
  				<Box
            key={index}
            heroeDescription={Description}
            heroeImg={data.img}
            heroeName={data.name}
            heroeComics={ Comics }
          />
  			)
      }
		})
	}

	render() {
		return (
			<div>
				<Header/>
				<div className="container-list">
					<SubHeader/>
					<div>
						{this.renderHeroeList()}
					</div>
				</div>
				<div className="container-favorite">
					<Favorite comicImg={this.state.comicImg} comicDescription={this.state.comicDescription}/>
				</div>
				<Footer/>
			</div>
		);
	}
}

export default Marvel;
