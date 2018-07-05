import {push} from 'connected-react-router'
export const moveToCounterPage = () => dispatch => {
    dispatch(push('/counter'));
}