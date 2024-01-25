import axios from "axios";
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { takeLatest, put } from "redux-saga/effects";

const giphList = (state = [], action) => {
  switch (action.type) {
    case "ADD_GIPHS":
    // do not use spread operator to avoid storing each search in store
      return action.payload;
    default:
      return state;
  }
};

function* fetchGiphs(action) {
    console.log('ACTION' , action)
  try {
    // to pass Param with GET, you must use /?${action.payload}
        // action.payload === newInput from SearchGiphs form
    const giphResponse = yield axios.get(`/api/search/?${action.payload}`);
    // yield put to add response data to store/state giphList()
    yield put({ type: "ADD_GIPHS", payload: giphResponse });
  } catch (error) {
    console.log("Theres an error in fetchGiphs", error);
  }
}

function* rootSaga() {
    yield takeLatest('FETCH_GIPHS', fetchGiphs)
}
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({ giphList }),
  applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(rootSaga);

export default store;
