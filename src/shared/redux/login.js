import { createActions, createReducer } from 'reduxsauce';

const INITIAL_STATE = {
  askToEnableBiometrics: false,
  langBeforeLogin: null,
  savedForgotUsername: '', // this is only used for forgot login. rememberMe value should always come from localstorage
  visibleModal: false,
  showMustResetPassword: false,
};

const { Types, Creators } = createActions({
  hideBiometricsModal: null,

  loginUser: ['payload'],

});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.HIDE_BIOMETRICS_MODAL]: hideBiometricsModalReducer,

});


function hideBiometricsModalReducer(state) {
  return {
    ...state,
    visibleModal: false,
  };
}


export const LoginTypes = Types;
export default Creators;


// src/features/todo/todoSlice.js


// import { createSlice } from "@reduxjs/toolkit"

// const initialState = {
//   };
//   const loginSlice = createSlice({
//     name: 'DataUpload',
//     initialState,
//     reducers: {
//       setlogInUser: (state, action) => {
//         state.uploadProcessData = action.payload;
//       },
//     }
//   });

// export const { 
//     setlogInUser
//  } = loginSlice.actions;
// export default loginSlice.reducer;
// const loginSlice = createSlice({
//   name: "todo",
//   initialState: {
//     todos: []
//   },
//   reducers: {
//     fetchData: (state, action) => {
//       return {
//         todos: action.payload
//       };
//     }
//   }
// });

// export const { fetchData } = loginSlice.actions;

// export default loginSlice.reducer;