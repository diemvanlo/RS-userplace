import { AppRegistry } from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import createSagaMiddleWare from 'redux-saga';
import {applyMiddleware, createStore} from 'redux';
import allReducers from './reducer';
import React from 'react';
import {Provider} from 'react-redux';
import rootSaga from './sagas';

const sagaMiddleWare = createSagaMiddleWare();
let store = createStore(allReducers, applyMiddleware(sagaMiddleWare));
const Appp = () => {
    return (
        <Provider store={store}>
            <App/>
        </Provider>
    );
};
sagaMiddleWare.run(rootSaga);
AppRegistry.registerComponent(appName, () => Appp);