import { createStore } from 'redux';

// SET-UP
const reducer = (state = {total: 0, current: 0}, action: {type: string, payload?: any}) => {
  console.log(action);

  switch(action.type) {
    case 'SET_CURRENT':
      return {...state, current: action.payload.value};
    case 'ADD':
      return {...state, total: state.total + action.payload.value};
    case 'SUBTRACT':
      return {...state, total: state.total - action.payload.value};
    case 'RESET':
      return {...state, total: 0};
    default:
      return state;
  }
};

const enhancer = ((window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__())

// ACTION-CREATORS
export const add = (value: number) => ({
  type: 'ADD',
  payload: { value },
});

export const subtract = (value: number) => ({
  type: 'SUBTRACT',
  payload: { value },
});

export const setCurrent = (value: number) => ({
    type: 'SET_CURRENT',
    payload: { value },
  });

export const reset = () => ({ type: 'RESET' });

export const store = createStore(reducer, enhancer);