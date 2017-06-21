import React, {Component} from 'react';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';

import Header from '../components/Header'
import SubHeader from '../components/SubHeader'
import Box from '../components/Box'
import Favorite from '../components/Favorite'
import Footer from '../components/Footer'
import { PubKey, TS, Hash, UrlCharacters } from '../config.js'
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
		const heroe = []

		axios.get(`${UrlCharacters}?apikey=${PubKey}&ts=${TS}&hash=${Hash}`)
			.then((response) => {
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
      (data.description && data.description.length > 200) ? Description = data.description : Description = "No Description Available..........Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic id culpa est illo, voluptatum quo deserunt cum nulla iure temporibus repellat impedit velit consequuntur harum necessitatibus, odio, adipisci veritatis mollitia.";
      (data.comics.available) ? Comics = data.comics.items.map((data) => { return data.name }) : Comics = [false, false, false, false]
      for (var i = index; i < 10; i++) {
        return (
  				<Box
            key={index}
						id={data.id}
            heroeDescription={Description}
            heroeImg={data.img}
            heroeName={data.name}
            heroeComics={ Comics }
          />
  			)
      }
			return true;
		})
	}

	render() {
		return (
			<div>
				<Header/>
					<Col className="backgroundColor" xs={10} md={10}>
						<Col xs={12} md={12}>
							<SubHeader/>
						</Col>
						<Col xs={12} md={12}>
							{this.renderHeroeList()}
						</Col>
					</Col>
					<Col className="favorite" xs={2} md={2}>
						<Favorite/>
					</Col>
					<Row>
						<Col xs={12} md={12}>
							<Footer/>
						</Col>
					</Row>
			</div>
		);
	}
}

export default Marvel;
