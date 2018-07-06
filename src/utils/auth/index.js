
// 使用 cookie 还是 token，目前主流做法是token

// import auth from './cookie';
import auth from '@/utils/storage';
import { commonParams } from '@/config/api/api.config';

// export default cookie;
// export default storage;

const TokenKey = 'd14-token';

function getToken() {
  return auth.get(TokenKey);
}

function setToken(token, time) {
  commonParams.setParams({ token })
  if (!token) {
    return removeToken();
  }
  return auth.set(TokenKey, token, time);
}

function removeToken() {
  return auth.remove(TokenKey);
}

export default {
  getToken,
  setToken,
  removeToken,
}
