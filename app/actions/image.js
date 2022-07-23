import {FETCH_IMAGES} from '../actionType/image';
import {devEnvVariable} from '../config/env';

export const getImages = () => ({
  type: FETCH_IMAGES,
  apiPackage: {
    method: 'GET',
    url: devEnvVariable.FULL_URL // 'https://api.pexels.com/v1/search?query=nature&per_page=10',
  },
});
