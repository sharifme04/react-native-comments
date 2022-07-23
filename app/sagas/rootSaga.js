import { all } from "redux-saga/effects"; 
import { watchImages } from './images';
 
export default function* rootSaga() {
  yield all([
    watchImages(),
  ]);
}
