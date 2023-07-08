import {
  userListLoading,
  userListFind,
  userListFailed
} from './action';
import {put, call, all, takeLatest} from 'redux-saga/effects';
import { Api } from './api';
import { USER_LIST_LOADING } from './reducer';


export function* getUserList(action) {
  try {
    
    const response = yield call(Api, action.payload);
    console.log("api_res>>",response?.data?.results)
    if (response?.data?.results?.length>0) {
      yield put(userListFind(response?.data?.results));
    } else {
      yield put(userListFailed(response?.data?.results));
    }
  } catch (err) {
    yield put(userListFailed(err?.response?.data?.message));
  }
}

// export function* otp(action) {
//   try {
//     const response = yield call(otpApi, action.payload);
//     console.log("otp_resdsadad>> ",response)
//     if (response.data.status == 200) {
//       yield put(otpSuccess(response.data.data));
//       navigation.navigate(RouteConstants.LOGIN_SCREEN);
//       Toast.show({
//         text1: 'Success',
//         text2: 'User Registered. Please try to login with credentials',
//       });
//     } else {
//       yield put(otpError(response.data.message));
//       Toast.show({
//         text1: 'Error',
//         text2: response.data.message,
//         type: 'error',
//       });
//     }
//   } catch (err) {
//     yield put(otpError(err.response.data.message));
//   }
// }
// export function* signup(action) {
//   try {
//     const response = yield call(signUpApi, action.payload);
//     console.log("dsadnaskdnk >>-",response)
//     if (response.data.status === 200 || response.data.status === 401) {
//       yield put(SignUpSuccess(response.data.data));
//       navigation.navigate(RouteConstants.OTP_SCREEN, {
//         data: action.payload,
//       });
//     } else {
//       yield put(SignUpError(response.data.message));
//       Toast.show({
//         text1: 'Error',
//         text2: response.data.message,
//       });
//     }
//   } catch (err) {
//     yield put(SignUpError(err.response.data.message));
//   }
// }

export function* userListSaga() {
  yield all([takeLatest(USER_LIST_LOADING, getUserList)]);
}
export default userListSaga;
