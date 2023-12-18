// errorReducer.js

// Define action types
const ERROR_OCCURRED = 'ERROR_OCCURRED';
const CLEAR_ERROR = 'CLEAR_ERROR';

// Initial state
const initialState = {
  error: null,
};

// Reducer function
const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ERROR_OCCURRED:
      return {
        ...state,
        error: action.payload,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

// Action creators
const errorOccurred = (errorMessage) => ({
  type: ERROR_OCCURRED,
  payload: errorMessage,
});

const clearError = () => ({
  type: CLEAR_ERROR,
});

export { errorReducer as default, errorOccurred, clearError }; // Exporting as default