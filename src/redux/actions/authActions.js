import * as types from "./types";

export const servicesState = (payload) => {
  return {
    type: types.TRIGGER_SERVICES,
    value: payload,
  };
};
