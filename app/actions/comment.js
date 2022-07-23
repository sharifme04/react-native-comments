import { ADD_COMMENT, DELETE_COMMENT, FETCH_COMMENTS, UPDATE_COMMENT} from '../actionType/comment';
import {devEnvVariable} from '../config/env';

export const addComment = (comment) => ({
    type: ADD_COMMENT,
    apiPackage: {
      url: `http://localhost:3000/comments`,
      method: 'POST',
      body: JSON.stringify(comment),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    },
    comment
  });
  
  export const deleteComment = (id) =>({
    type: DELETE_COMMENT,
    apiPackage: {
      method: 'DELETE',
      url: `http://localhost:3000/comments/${id}`,
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    },
    id
  });
  
  export const updateComment = (comment) =>({
    type: UPDATE_COMMENT,
    apiPackage: {
      method: 'PATCH',
      url: `http://localhost:3000/comments/${comment.id}`,
      body: JSON.stringify(comment),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    },
    comment,
    id: comment.id
  });

  export const getComments = () => ({
    type: FETCH_COMMENTS,
    apiPackage: {
      method: 'GET',
      url: `http://localhost:3000/comments`,
    },
  });
  