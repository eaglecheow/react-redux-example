import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux'
import { rootReducers, rootReducerWithRouter } from './redux/reducers';
import { addNumber, subtractNumber, multiplyNumber, devideNumber } from './redux/actions/math';
import { fetchAndSaveData } from './redux/actions/apiTest';
import { moveToCounterPage } from './navigation/navigationService';

class App extends Component {

	render() {
		return (
			<div>
				<div>This is Home Page</div>
				<button onClick={() => this.props.dispatch(moveToCounterPage())}>Go to counter page</button>
			</div>
		);
	}
}

export default connect(rootReducers)(App);
