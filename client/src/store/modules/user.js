// import client from "../../lib/api/client";
import { createAction, handleActions } from "redux-actions";
import { takeLatest, call } from "redux-saga/effects";
import createRequestSaga from "../../lib/createRequestSaga";

const SET_USER = "user/SET_USER";
const CHECK = "user/CHECK";
const CHECK_SUCCESS = "user/CHECK_SUCCESS";
const CHECK_FAILURE = "user/CHECK_FAILURE";
const LOGOUT = "auth/LOGOUT";

export const setUser = createAction(SET_USER, (user) => user);
export const check = createAction(CHECK);
export const logout = createAction(LOGOUT);

const checkSaga = createRequestSaga(CHECK, () => {
  // client.get("/api/auth/check");
});

function checkFailureSaga() {
  try {
    localStorage.removeItem("user");
  } catch (e) {
    console.log(e);
  }
}

function* logoutSaga() {
  try {
    yield call(); // client.post("/api/auth/logout")
    localStorage.removeItem("user");
  } catch (e) {
    console.log(e);
  }
}

export function* userSaga() {
  yield takeLatest(CHECK, checkSaga);
  yield takeLatest(CHECK_FAILURE, checkFailureSaga);
  yield takeLatest(LOGOUT, logoutSaga);
}

const initialState = {
  user: null,
  userError: null,
};

const user = handleActions(
  {
    [SET_USER]: (state, action) => ({
      ...state,
      user: action.payload,
    }),
    [CHECK_SUCCESS]: (state, action) => ({
      user: action.payload,
      userError: null,
    }),
    [CHECK_FAILURE]: (state, action) => ({
      user: null,
      userError: action.payload,
    }),
    [LOGOUT]: (state) => ({
      ...state,
      user: null,
    }),
  },
  initialState
);

export default user;
