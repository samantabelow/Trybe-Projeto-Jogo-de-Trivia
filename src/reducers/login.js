import { LOGIN } from '../actions/login';

const INITIAL_STATE = {
  email: '',
  logged: false,
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOGIN:
    return {
      email: action.email,
      logged: true,
    };
  default:
    return state;
  }
};

export default user;
