import { saveTokenToLocalStorage } from "~/helpers/local.storage.helper";

export default {
  commitRegister(state, payload) {
    saveTokenToLocalStorage(payload.accessToken);
    state.accessToken = payload.accessToken;
    state.user = payload.user;
  },
  commitLogin(state, payload) {
    saveTokenToLocalStorage(payload.accessToken);
    state.accessToken = payload.accessToken;
    state.user = payload.user;
  },
  commitLogout(state) {
    state.accessToken = null;
    state.user = null;
  },
}
