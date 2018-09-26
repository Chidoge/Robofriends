import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import './App.css';


import { setSearchField, requestRobots } from '../actions';

/* Maps state set from relevant reducer to the props */
const mapStateToProps = (state) => {

	return {
		searchField : state.searchRobots.searchField,
		robots : state.requestRobots.robots,
		isPending : state.requestRobots.isPending,
		error : state.requestRobots.error
	}
}

/* What props I should listen that are actions that
need to be dispatched */
const mapDispatchToProps = (dispatch) => {

	return {
		onSearchChange : (event) => dispatch(setSearchField(event.target.value)),
		/* onRequestRobots : () => requestRobots(dispatch) */
		onRequestRobots : () => dispatch(requestRobots())
	}
}


class App extends Component {

	/* On mounting of app, fetch user list and save it */
	componentDidMount() {

		this.props.onRequestRobots();
	}


	render() {

		const { searchField, onSearchChange, robots, isPending } = this.props;
		
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		});

		let listSection;

		if (isPending) {
			listSection = <div><h1 className = 'f1'>Loading</h1></div>;
		}
		else {
			listSection = 
				<div>
					<SearchBox onSearchChange = {onSearchChange} />
					<Scroll>
						<CardList robots = {filteredRobots} />
					</Scroll>
				</div>;
		}
		return (
			<div className = 'tc'>
				<h1 className = 'f1'>Robofriends</h1>
					{listSection}
			</div>
		);

	}
}

/* Connect function connects the React components to Redux */
export default connect(mapStateToProps, mapDispatchToProps)(App);
