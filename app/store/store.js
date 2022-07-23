import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
//import applyAppStateListener from 'redux-enhancer-react-native-appstate';

import rootSaga from '../sagas/rootSaga';
import rootReducer from '../reducers/rootReducer';
import middleware from '../middleware';

const persistConfig = {
  key: 'root',
  //timeout: null,
  keyPrefix: '',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware({
  onError: err => console.warn('Error@Saga: ', err.message),
});
export const store = createStore(
  // rootReducer,
  persistedReducer,
  compose(applyMiddleware(sagaMiddleware, ...middleware)),
);
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
