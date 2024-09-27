import * as types from "../actions/types";

const initialState = {
  isService: "",
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case types.TRIGGER_SERVICES: {
      return {
        ...state,
        isService: action?.value,
      };
    }
    default:
      return state;
  }
}
