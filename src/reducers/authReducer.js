import { types } from "../types/types";
/*
  {
    uid: 'fdagdatgredas5d784gfs',
    name: 'Andrés'
  }
*/

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        uid: action.payload.uid,
        name: action.payload.displayName,
      };
    case types.logout:
      return {};
    default:
      return state;
  }
};
