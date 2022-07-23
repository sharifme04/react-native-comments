import {
  FETCH_IMAGES_PENDING,
  FETCH_IMAGES_SUCCESS,
  FETCH_IMAGES_FAILURE,
} from '../actionType/image';

const initialState = {
  images: null,
  error: null,
};

export default function imagesReducer(state = initialState, action) {
  //console.log('action 13 reducer', action);
  switch (action.type) {
    case FETCH_IMAGES_PENDING:
      return {
        ...state,
        error: null,
        isLoading: true,
      };
    case FETCH_IMAGES_SUCCESS:
      const images = action?.response;
      return {
        ...state,
        images: images,
        error: null,
        isLoading: false,
      };
    case FETCH_IMAGES_FAILURE:
      return {
        ...state,
        error: action.response,
        isLoading: false,
      };
    default:
      return state;
  }
}
