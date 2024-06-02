const initialState = {
  inputValue: '',
  replay: false,
};

const SET_INPUT = 'SET_INPUT';
const REPLAY_VIDEO = 'REPLAY_VIDEO';

export const setInput = (value: string) => ({
  type: SET_INPUT,
  payload: value,
});

export const replayVideo = () => ({
  type: REPLAY_VIDEO,
});

export const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_INPUT:
      return {
        ...state,
        inputValue: action.payload,
      };
    case REPLAY_VIDEO:
      return {
        ...state,
        replay: !state.replay,
      };
    default:
      return state;
  }
};

export default reducer;
