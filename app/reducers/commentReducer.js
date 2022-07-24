import {
  ADD_COMMENT_PENDING,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAILURE,
  DELETE_COMMENT_PENDING,
  DELETE_COMMENT_SUCCESS,
  DELETE_COMMENT_FAILURE,
  FETCH_COMMENTS_PENDING,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAILURE,
  UPDATE_COMMENT_PENDING,
  UPDATE_COMMENT_SUCCESS,
  UPDATE_COMMENT_FAILURE,
} from '../actionType/comment';

const initialState = {
  error: null,
  comments: [],
};

export default function commentsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_COMMENTS_PENDING:
      return {
        ...state,
        error: null,
        isLoading: true,
      };
    case FETCH_COMMENTS_SUCCESS:
      const comments = action?.response;
      return {
        ...state,
        comments: comments,
        error: null,
        isLoading: false,
      };
    case FETCH_COMMENTS_FAILURE:
      return {
        ...state,
        error: action.response,
        isLoading: false,
      };

    case ADD_COMMENT_PENDING:
      return {
        ...state,
        error: null,
        isLoading: true,
      };
    case ADD_COMMENT_SUCCESS:
      const comment = action?.response;
      return {
        ...state,
        response: action.response,
        comments: [...state.comments, comment],
        isLoading: false,
      };
    case ADD_COMMENT_FAILURE:
      return {
        ...state,
        error: action.response.error,
        isLoading: false,
      };
    case DELETE_COMMENT_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case DELETE_COMMENT_SUCCESS:
      return {
        ...state,
        comments: state.comments.filter(comment => comment.id !== action.id),
        isLoading: false,
      };
    case DELETE_COMMENT_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    case UPDATE_COMMENT_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case UPDATE_COMMENT_SUCCESS:
      return {
        comments: state.comments.map(comment => {
          if (comment.id !== action.id) {
            return comment;
          }
          return {
            ...comment,
            ...action.comment,
          };
        }),
        isLoading: false,
      };
    case UPDATE_COMMENT_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    default:
      return state;
  }
}
