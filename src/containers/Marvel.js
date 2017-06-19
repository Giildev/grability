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
			heroe: []
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
					img: data.thumbnail.path + "/standard_fantastic." + data.thumbnail.extension
				});
				return true;
			})
			this.setState({heroe})
		}).catch((error) => {
			console.log('err', error);
		});
	}

	renderHeroeList = () => {
		return this.state.heroe.map((data) => {
			return (
				<li>{data.name}</li>
			)
		})
	}

	render() {
		return (
			<div>
				<Header/>
				<div className="container-list">
					<SubHeader/>
					<ul>
						{this.renderHeroeList()}
					</ul>
					<div>
						<Box/>
					</div>
				</div>
				<div className="container-favorite">
					<Favorite/>
				</div>
				<Footer/>
			</div>
		);
	}
}

export default Marvel;
