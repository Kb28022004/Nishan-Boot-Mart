import {
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_RESET,
  UPDATE_PROFILE_FAIL,
  UPDATE_PASSOWORD_REQUEST,
  UPDATE_PASSOWORD_SUCCESS,
  UPDATE_PASSOWORD_RESET,
  UPDATE_PASSOWORD_FAIL,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAIL,
  CLEAR_ERRORS,
} from "../constant/userConstants";
export const authReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case LOGOUT_SUCCESS:
      return {
        loading: false,
        isAuthenticated: false,
        user: null,
      };

    case LOGOUT_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_PROFILE_REQUEST:
    case UPDATE_PASSOWORD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_PROFILE_SUCCESS:
    case UPDATE_PASSOWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };

    case UPDATE_PROFILE_RESET:
    case UPDATE_PASSOWORD_RESET:
      return {
        ...state,

        isUpdated: false,
      };

    case UPDATE_PROFILE_FAIL:
    case UPDATE_PASSOWORD_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const forgotPasswordReducer = (state = {}, action) => {
  switch (action.type) {
    case FORGOT_PASSWORD_REQUEST:
      return {
        ...state,
        error: null,
      };

    case FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,

        message: action.payload,
      };

    case FORGOT_PASSWORD_FAIL:
      return {
        ...state,

        error: null,
      };

    default:
      return state;
  }
};
