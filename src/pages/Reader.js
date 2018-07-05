import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fetchAndSaveData } from '../redux/actions/apiTest';
import {connect} from 'react-redux'
import { rootReducerWithRouter, rootReducers } from '../redux/reducers';
import { moveToCounterPage } from '../navigation/navigationService';

class Reader extends Component {

	componentDidMount() {
		this.props.dispatch(fetchAndSaveData());
	}

	render() {
		return (
			this.props.data
			?
				<div>
                    <button onClick={() => this.props.dispatch(moveToCounterPage())}>Go to counter page</button>
					{
						this.props.data.map(data => {
							return (
								<div key={data.id}>
									<h3>{data.title}</h3>
									<p>{data.body}</p>
								</div>
							)
						})
					}
				</div>
			:
				<div>
					<h1>Please wait while we pull some data...</h1>
				</div>
		);
	}
}

export default connect(rootReducers => rootReducers.apiTest)(Reader);