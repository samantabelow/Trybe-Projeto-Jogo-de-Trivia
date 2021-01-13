import md5 from 'crypto-js/md5';

export const GRAVATAR_REQUEST_STARTED = 'GRAVATAR_REQUEST_STARTED';
export const gravatarRequestStarted = () => ({ type: GRAVATAR_REQUEST_STARTED });

export const GRAVATAR_REQUEST = 'GRAVATAR_REQUEST';
export const gravatarRequest = (gravatar) => ({ type: GRAVATAR_REQUEST, gravatar });

export const GRAVATAR_REQUEST_FAIL = 'GRAVATAR_REQUEST_FAIL';
export const gravatarRequestFail = (error) => ({ type: GRAVATAR_REQUEST_FAIL, error });

export const CHANGE_QUESTION_NUMBER = 'CHANGE_QUESTION_NUMBER';
export const changeQuestionNumber = () => ({ type: CHANGE_QUESTION_NUMBER });

export const CHANGE_STYLE = 'CHANGE_STYLE';
export const changeButtonStyle = () => ({ type: CHANGE_STYLE });

export const RESET_CLASSES = 'RESET_CLASSES';
export const resetClasses = () => ({ type: RESET_CLASSES });

export const CHANGE_SCORE = 'CHANGE_SCORE';
export const changeScore = () => ({ type: CHANGE_SCORE });

export const RESET_SCORE = 'RESET_SCORE';
export const resetScore = () => ({ type: RESET_SCORE });

export const RESET_QUESTION = 'RESET_QUESTION';
export const resetQuestion = () => ({ type: RESET_QUESTION });

export function fetchGravatar(gravatarEmail) {
  return async (dispatch) => {
    try {
      dispatch(gravatarRequestStarted());
      const gravatarHash = await md5(gravatarEmail);
      const gravatar = (`https://www.gravatar.com/avatar/${gravatarHash}`);
      dispatch(gravatarRequest(gravatar));
    } catch (erro) {
      dispatch(gravatarRequestFail());
    }
  };
}
