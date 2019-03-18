import { createStore, applyMiddleware, Reducer, Store, AnyAction} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'

interface StoreState { 
  total: number; 
  current: number; 
  loading: boolean; 
}

// SET-UP
const reducer: Reducer<StoreState> = (state = { total: 0, current: 0, loading: false }, action: AnyAction) => {
  console.log(action);

  switch (action.type) {
    case "SET_CURRENT":
      return { ...state, current: action.payload.value };
    case "SET_TOTAL":
      return { ...state, total: action.payload.value };
    case "SUBTRACT":
      return { ...state, total: state.total - action.payload.value };
    case "RESET":
      return { ...state, total: 0 };
    case "START_LOADER":
      return { ...state, loading: true };
    case "STOP_LOADER":
      return { ...state, loading: false };
    default:
      return state;
  }
};

// ACTION-CREATORS
export const add = (value: number) => async (dispatch, getState) => {
  dispatch(startLoader());
  const result = await makeComputation(value, getState().total);
  dispatch(setTotal(result));
  dispatch(stopLoader())
};

export const subtract = (value: number) => ({
  type: "SUBTRACT",
  payload: { value },
});

export const setCurrent = (value: number) => ({
  type: "SET_CURRENT",
  payload: { value },
});

export const setTotal = (value: number) => ({
  type: "SET_TOTAL",
  payload: { value },
});

export const startLoader = () => ({
  type: "START_LOADER"
})

export const stopLoader = () => ({
  type: "STOP_LOADER"
})

export const reset = () => ({ type: "RESET" });


export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));


//HELPERS
function makeComputation(value, currentValue): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(value + currentValue), 2000)
  })
}