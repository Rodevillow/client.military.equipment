import {getTokenFromLocalStorage} from "~/helpers/local.storage.helper";

export default function ({ store, redirect }) {


  const token = getTokenFromLocalStorage();

  console.log('* - * - * - * - * - * - * - *');
  console.log(token);
  console.log('- - - - - - - - - - - - - - -');
  console.log(store.state.auth.accessToken);
  console.log('* - * - * - * - * - * - * - *');

  if (!store.state.auth.accessToken && !token) {
    return redirect('/signin');
  }
}
