import React, {Component} from 'react';
import CardList from '../components/CardList';

class App extends Component {

	constructor(props) {

		super();
		this.state = {

		}
	}

	render() {

		return (
			<div className="App">
				<CardList robots = {this.props.robots} />
			</div>
		);

	}
}

export default App;
