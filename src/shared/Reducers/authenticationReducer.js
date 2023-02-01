
const initialState = {
  isAuthenticated: false,
  user: {},
  showSearch: false,
  deviceToken: '',
  organisation: {}
};

//sampleUse: showLoader()
export default function authenticationReducer(
  state = initialState,
  action
) {
  switch (action.type) {
   
    default:
      return state;
  }
}
