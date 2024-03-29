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

const favoriteList = (state = [], action) => {
  switch (action.type) {
    case "STORE_FAVORITES":
      return action.payload
    default: return state
  }
}

const categoryList = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CATEGORIES':
      return action.payload
    default:
      return state
  }
}

function* fetchCategories(action){
  try {
    const categoryResponse = yield axios.get('/api/categories')
    yield put({type: 'ADD_CATEGORIES', payload: categoryResponse.data})
    
  } catch (error) {
    console.log('Theres an error in fetchCategories')
  }
}

function* updateCategory(action) {
  try { 
    yield axios.put(`/api/favorites/${action.payload.gifId}`, {category_id : action.payload.catId})
    yield put({type: 'FETCH_FAVORITES' })
  } catch (error){
   console.log('Theres an error in updateCategor')
}
}
function* fetchGiphs(action) {
  try {
    // to pass Param with GET, you must use api/search/${action.payload}
        // action.payload === newInput from SearchGiphs form
    const giphResponse = yield axios.get(`/api/search/${action.payload}`);
    // yield put to add response data to store/state giphList()
    yield put({ type: "ADD_GIPHS", payload: giphResponse.data });
  } catch (error) {
    console.log("Theres an error in fetchGiphs", error);
  }
}

function* fetchFavorites(action) {
  try {
    const favoriteGiph = yield axios.get(`/api/favorites/`);
    yield put({ type: "STORE_FAVORITES", payload: favoriteGiph.data });
  } catch (error) {
    console.log("Theres an error in fetchFavorites", error);
  }
}

function* addFavorite(action) {
  console.log(action.payload)
  try{
    yield axios.post(`/api/favorites`, {url: action.payload})
    yield put({type: 'FETCH_FAVORITES'})
  }catch(error){
    console.log('Error adding favorite:', error)
  }
}

// Root Saga
function* rootSaga() {
    yield takeLatest('FETCH_GIPHS', fetchGiphs)
    yield takeLatest('FETCH_FAVORITES', fetchFavorites)
    yield takeLatest('ADD_FAVORITE', addFavorite)
    yield takeLatest('UPDATE_CATEGORY', updateCategory)
    yield takeLatest('FETCH_CATEGORIES', fetchCategories)
}
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({ giphList, favoriteList, categoryList }),
  applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(rootSaga);

export default store;
