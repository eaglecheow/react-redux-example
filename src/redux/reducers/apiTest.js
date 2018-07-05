import * as ActionTypes from '../action-types/apiTest';

export const apiTest = (state = null, action) => {
    switch (action.type) {
        case ActionTypes.SAVE_DATA: {
            return Object.assign({}, state, {
                data: action.data
            });
        }
        default: {
            return state;
        }
    }
}