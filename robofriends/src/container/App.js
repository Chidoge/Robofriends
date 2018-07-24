import React, {Component} from 'react';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';

class App extends Component {

	constructor(props) {

		super();

		this.state = {
			robots : props.robots,
			searchField : ''
		}
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
				<h1>Robofriends</h1>
				<SearchBox onSearchChange = {this.onSearchChange} />
				<CardList robots = {filteredRobots} />
			</div>
		);

	}
}

export default App;
