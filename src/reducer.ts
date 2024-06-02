const initialState = {
  inputValue: '',
  replay: false,
  position: { x: 0, y: 0 },
};

const SET_INPUT = 'SET_INPUT';
const REPLAY_VIDEO = 'REPLAY_VIDEO';
const SET_POSITION = 'SET_POSITION';

export const setInput = (value: string) => ({
  type: SET_INPUT,
  payload: value,
});

export const replayVideo = () => ({
  type: REPLAY_VIDEO,
});

export const setPosition = (x: any, y: any) => ({
  type: SET_POSITION,
  payload: { x, y },
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
    case SET_POSITION:
      return {
        ...state,
        position: action.payload,
      }
    default:
      return state;
  }
};

export default reducer;
