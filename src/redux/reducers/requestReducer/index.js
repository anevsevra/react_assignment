import ACTIONS from '../../../constants/actions';

const initialState = { isLoading: false };

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.REQUEST_STARTED:
    case ACTIONS.REQUEST_FINISHED:
      return { ...state, isLoading: !state.isLoading };
    default:
      return state;
  }
};
