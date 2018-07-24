import React, {Component} from 'react';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import './App.css';

class App extends Component {

	constructor(props) {

		super();

		this.state = {
			robots : [],
			searchField : ''
		}
	}

	componentDidMount() {
		
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => {
			this.setState({ robots : users});
		});
	}


	onSearchChange = (event) => {
		this.setState({searchField : event.target.value});
	}


	render() {

		const filteredRobots = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
		});

		return (
			<div className = 'tc'>
				<h1 className = 'f1'>Robofriends</h1>
				<SearchBox onSearchChange = {this.onSearchChange} />
				<CardList robots = {filteredRobots} />
			</div>
		);

	}
}

export default App;
