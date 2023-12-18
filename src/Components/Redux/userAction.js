
export const GET_USERS = "GET_USERS";
export const ADD_USER = "ADD_USER";
export const DELETE_USER = "DELETE_USER";
// Create action creators for these types of actions
export const getUsers = () => ({ type: GET_USERS });
export const addUser = (user) => ({ type: ADD_USER, payload: user });
export const deleteUser = (id) => ({ type: DELETE_USER, payload: id });
// Similarly, define other action creators
