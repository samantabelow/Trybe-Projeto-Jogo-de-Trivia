import {
  GRAVATAR_REQUEST_STARTED,
  GRAVATAR_REQUEST,
  GRAVATAR_REQUEST_FAIL,
  CHANGE_QUESTION_NUMBER,
  CHANGE_SCORE,
  CHANGE_STYLE,
  RESET_CLASSES } from '../actions/gamepage';

const INITIAL_STATE = {
  gravatar: '',
  isLoading: false,
  score: 0,
  currentQuestion: 0,
  rightClass: '',
  wrongClass: '',
};

const gamepage = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GRAVATAR_REQUEST_STARTED:
    return { ...state, isLoading: true };
  case GRAVATAR_REQUEST:
    return { ...state, gravatar: action.gravatar, isLoading: false };
  case GRAVATAR_REQUEST_FAIL:
    return { ...state, isLoading: false };
  case CHANGE_QUESTION_NUMBER:
    return { ...state, currentQuestion: state.currentQuestion + 1 };
  case CHANGE_SCORE:
    return { ...state, score: state.score + 1 };
  case CHANGE_STYLE:
    return { ...state, rightClass: 'right', wrongClass: 'wrong' };
  case RESET_CLASSES:
    return { ...state, rightClass: '', wrongClass: '' };
  default:
    return state;
  }
};

export default gamepage;
