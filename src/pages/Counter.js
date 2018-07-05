import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import { rootReducers, rootReducerWithRouter } from '../redux/reducers';
import { addNumber, subtractNumber, multiplyNumber, devideNumber } from '../redux/actions/math';
import {goBack} from 'connected-react-router'

class Counter extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1>The total number is: {this.props.totalNumber}</h1>
                    <button onClick={() => this.props.dispatch(addNumber(10))}>Add 10</button>
                    <button onClick={() => this.props.dispatch(subtractNumber(10))}>Subtract 10</button>
                    <button onClick={() => this.props.dispatch(multiplyNumber(10))}>Multiply 10</button>
                    <button onClick={() => this.props.dispatch(devideNumber(10))}>Devide 10</button>
                </div>
                <button onClick={() => this.props.dispatch(goBack())}>Go Back</button>
            </div>
        );
    }
}

export default connect(rootReducers => rootReducers.math)(Counter);