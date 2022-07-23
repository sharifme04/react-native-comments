
import {  select, put, takeEvery, takeLatest } from "redux-saga/effects";
import {
    FETCH_IMAGES_SUCCESS,
  } from "../actionType/image";

  function* getResult(){
    console.log('you have successfully got images saga 8');
  }

export function* watchImages() {
    yield takeLatest(FETCH_IMAGES_SUCCESS, getResult);
  }
  