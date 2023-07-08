import {all} from 'redux-saga/effects';
import { userListSaga } from "../userList/saga";
export default function* rootSaga() {
  yield all([
    userListSaga()
  ]);
}
