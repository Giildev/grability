import React from 'react';
import './styles.css'
import SearchLogo from '../icons/search.png'

class SearchBar extends React.Component {
    constructor() {
        super();
        this.state = { term: '' }
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onTermChange(term);
    }

    render() {
        return (
            <div>
              <input className="search__input" placeholder="Search Character..."/>
              <img className="search__icon" src={SearchLogo} alt=""/>
            </div>
        );
    }
}

export default SearchBar;
