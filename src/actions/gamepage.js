import md5 from 'crypto-js/md5';

export const GRAVATAR_REQUEST_STARTED = 'GRAVATAR_REQUEST_STARTED';
export const gravatarRequestStarted = () => ({ type: GRAVATAR_REQUEST_STARTED });

export const GRAVATAR_REQUEST = 'GRAVATAR_REQUEST';
export const gravatarRequest = (gravatar) => ({ type: GRAVATAR_REQUEST, gravatar });

export const GRAVATAR_REQUEST_FAIL = 'GRAVATAR_REQUEST_FAIL';
export const gravatarRequestFail = (error) => ({ type: GRAVATAR_REQUEST_FAIL, error });

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
