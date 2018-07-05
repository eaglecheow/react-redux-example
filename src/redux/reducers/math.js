import * as ActionTypes from '../action-types/math';

const InitialState = {
    totalNumber: 0
}

export const math = (state = InitialState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_NUMBER: {
            return Object.assign({}, state, {
                totalNumber: state.totalNumber + action.number
            });
        }
        case ActionTypes.SUBTRACT_NUMBER: {
            return Object.assign({}, state, {
                totalNumber: state.totalNumber - action.number
            });
        }
        case ActionTypes.MULTIPLY_NUMBER: {
            return Object.assign({}, state, {
                totalNumber: state.totalNumber * action.number
            });
        }
        case ActionTypes.DEVIDE_NUMBER: {
            return Object.assign({}, state, {
                totalNumber: state.totalNumber / action.number
            });
        }
        default: {
            return state;
        }
    }
}