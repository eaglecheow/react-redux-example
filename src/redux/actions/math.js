import * as ActionTypes from '../action-types/math';

export const addNumber = (number) => {
    return {
        type: ActionTypes.ADD_NUMBER,
        number
    };
};

export const subtractNumber = (number) => {
    return {
        type: ActionTypes.SUBTRACT_NUMBER,
        number
    };
};

export const multiplyNumber = (number) => {
    return {
        type: ActionTypes.MULTIPLY_NUMBER,
        number
    };
};

export const devideNumber = (number) => {
    return {
        type: ActionTypes.DEVIDE_NUMBER,
        number
    };
};