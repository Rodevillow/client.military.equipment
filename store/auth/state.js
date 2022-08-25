import {getTokenFromLocalStorage} from "~/helpers/local.storage.helper";

export default () => ({
  accessToken: getTokenFromLocalStorage(),
  user: null
})
