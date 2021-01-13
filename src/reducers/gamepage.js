import {
  GRAVATAR_REQUEST_STARTED,
  GRAVATAR_REQUEST,
  GRAVATAR_REQUEST_FAIL,
  CHANGE_QUESTION_NUMBER,
  CHANGE_SCORE,
  CHANGE_STYLE,
  RESET_CLASSES,
  START_TIMER,
  RESET_TIMER } from '../actions/gamepage';

const INITIAL_STATE = {
  gravatar: '',
  isLoading: false,
  score: 0,
  currentQuestion: 0,
  rightClass: '',
  wrongClass: '',
  time: 5,
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
  case START_TIMER:
    return { ...state, time: state.time - 1 };
  case RESET_TIMER:
    return { ...state, time: 30 };
  default:
    return state;
  }
};

export default gamepage;
