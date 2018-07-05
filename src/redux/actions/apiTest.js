import * as ActionTypes from '../action-types/apiTest';
import { fetchData } from './../../rest/gps-fleet';

export const saveData = (data) => {
    return {
        type: ActionTypes.SAVE_DATA,
        data
    };
};

export const fetchAndSaveData = () => dispatch => {
    return fetchData()
        .then(response => response.json())
        .then(result => dispatch(saveData(result)))
        .catch(err => console.log(err));
}