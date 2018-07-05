
// 使用 cookie 还是 token，目前主流做法是token

// import auth from './cookie';
import auth from './storage';

// export default cookie;
// export default storage;

const TokenKey = 'd14-token';

function getToken() {
  return auth.get(TokenKey);
}

function setToken(token, time) {
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
