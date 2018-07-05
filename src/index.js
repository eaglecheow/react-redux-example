import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, applyMiddleware, compose} from 'redux'
import { rootReducers } from './redux/reducers/index';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import { createBrowserHistory } from 'history';
import {connectRouter, routerMiddleware, ConnectedRouter} from 'connected-react-router';
import { Switch, Route } from 'react-router';
import Counter from './pages/Counter';
import Reader from './pages/Reader';
import localForage from 'localforage';
import {persistStore, persistReducer} from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react';

const persistConfig = {
    key: 'root',
    storage: localForage
}

const persistedReducer = persistReducer(persistConfig, rootReducers);

const history = createBrowserHistory();
const rootReducerWithRouter = connectRouter(history)(persistedReducer);


let store = createStore(rootReducerWithRouter, {}, compose(
    applyMiddleware(
        routerMiddleware(history),
        thunk
    )
));

let persistor = persistStore(store);

const ConnectedApp = ({rootStore}) => {

    return (
        <Provider store={rootStore}>
            <PersistGate persistor={persistor}>
                <ConnectedRouter history={history}>
                    <div>
                        <Switch>
                            <Route exact path="/" component={App}/>
                            <Route path="/counter" component={Counter}/>
                            <Route path="/reader" component={Reader}/>
                            <Route render={() => (<div>Miss</div>)} />
                        </Switch>
                    </div>
                </ConnectedRouter>
            </PersistGate>
        </Provider>
    )
} 

ReactDOM.render(<ConnectedApp rootStore={store}/> , document.getElementById('root'));
registerServiceWorker();
