import { getCurrentUser } from "./auth-reducer";


const INITIALIZED_SUCCES = 'INITIALIZED_SUCCES';

let initialState = {
  initialized: false,
}

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCES:
      return {
        ...state,
        initialized: true
      }
    default:
      return state;
  }
};

export const initializedSucces = () => ({ type: INITIALIZED_SUCCES });

export const initializeApp = () => {
  return (dispatch) => {
    let promise = dispatch(getCurrentUser());
      Promise.all([promise]).then(() => {
        dispatch(initializedSucces());
      })
  }
}