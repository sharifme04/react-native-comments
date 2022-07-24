import {devEnvVariable} from '../config/env';

const apiMiddleware = (store) => (next) => (action) => {
  if (!action.apiPackage) return next(action);

  const { headers, body, method, url, parameters } = action.apiPackage;
  const { type } = action;
  //const apiURL = devEnvVariable.BASE_URL;
  const apiURL = url ;
  const API_KEY = devEnvVariable.API_KEY;

  const defaultHeaders = {
      Authorization: API_KEY //`563492ad6f91700001000001d23db4a4e8de40528fc284bfb7258584`,
  }

  next({
    type: `${type}_PENDING`,
  });

  fetch(`${apiURL}`, {
    method: method,
    headers: {
      ...defaultHeaders,
      ...headers
    },
    body: body || null
  })
    .then((res) => {
      if (res.ok) { 
        return Promise.resolve(res.json()); 
      }
      return Promise.resolve(res.json()).then((responseInJson) => { 
        return Promise.reject(responseInJson);
      });
    })
    .then(
      //SUCCESS PART
      (res) => {
      if (res?.status === 1) {
        console.log('False Positive. Actually an error happened at ActionType: ', action.type);
        throw res;
      }

        const {apiPackage, ...restAction } = action;
        store.dispatch({
          ...restAction,
          type: `${type}_SUCCESS`,
          response: res
        }); 
      
    }, (error) => { // ERROR part
        throw error;
      })
    .catch((error) => {
      let res;
      if (error.status === 1) {
        res = { status: 1, error: error.status || 500, message: error.message, text: error.text, invalid_fields: error.invalid_fields };
      } else {
        res = { status: 1, error: error.status || 500, message: error.status_msg, text: error.error_text };
      }

      store.dispatch({
        type: `${type}_FAILURE`,
        response: res,
      });
    });
};

export default apiMiddleware;
