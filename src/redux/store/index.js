import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import UserListReducer from '../userList/reducer';
import rootSaga from '../saga';
const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  userListReducer: UserListReducer
})

const store = createStore(
  rootReducer,
  applyMiddleware(
    sagaMiddleware,
    createLogger(),
  ),
);
sagaMiddleware.run(rootSaga);
export {
  store,
}