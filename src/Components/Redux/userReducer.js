const initialState = {
    userList: [],
    user: {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      address1: "",
      address2: "",
      country: "",
      state: "",
      zipcode: "",
    },
  };
  
  const userReducer = (state = initialState, action) => {
    // Handle different actions here
  // Make sure to always return a state, even if it's the default state
  switch (action.type) {
    // handle different action types
    default:
      return state;
  }
  };
  
  export { userReducer as default };