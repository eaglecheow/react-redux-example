import { combineReducers } from 'redux';
import { math } from './math';
import { apiTest } from './apiTest';
export const rootReducers = combineReducers({
    math,
    apiTest
});
