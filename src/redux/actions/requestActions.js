import ACTIONS from '../../constants/actions';

export const requestStarted = () => ({
  type: ACTIONS.REQUEST_STARTED,
});

export const requestFinished = () => ({
  type: ACTIONS.REQUEST_FINISHED,
});
