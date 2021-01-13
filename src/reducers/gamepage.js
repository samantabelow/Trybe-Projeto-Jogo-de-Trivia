import {
  GRAVATAR_REQUEST_STARTED,
  GRAVATAR_REQUEST,
  GRAVATAR_REQUEST_FAIL,
  CHANGE_QUESTION_NUMBER,
  CHANGE_SCORE,
  CHANGE_STYLE,
  RESET_CLASSES,
  RESET_SCORE,
  RESET_QUESTION,
  ENABLE_BUTTON,
  DISABLE_BUTTON } from '../actions/gamepage';

const INITIAL_STATE = {
  gravatar: '',
  isLoading: false,
  score: 0,
  currentQuestion: 0,
  rightClass: '',
  wrongClass: '',
  nextButtonClass: 'button-next-invisible',
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
  case RESET_SCORE:
    return { ...state, score: 0 };
  case RESET_QUESTION:
    return { ...state, currentQuestion: 0 };
  case ENABLE_BUTTON:
    return { ...state, nextButtonClass: 'button-next-visible' };
  case DISABLE_BUTTON:
    return { ...state, nextButtonClass: 'button-next-invisible' };
  default:
    return state;
  }
};

export default gamepage;
