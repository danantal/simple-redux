import { createStore } from 'redux';

// SET-UP
const reducer = (state = {total: 0}, action: {type: string, payload?: any}) => {
  console.log(action);

  switch(action.type) {
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

const store = createStore(reducer, enhancer);

// ACTION-CREATORS
const add = (value: number) => ({
  type: 'ADD',
  payload: { value },
});

const subtract = (value: number) => ({
  type: 'SUBTRACT',
  payload: { value },
});

const reset = () => ({ type: 'RESET' });

// SUBSCRIBE
store.subscribe(() => {
  setTotal(store.getState().total);
});

// DISPATCH
document.getElementById('add-btn').addEventListener('click', () => {
  store.dispatch(add(getValue()));
});

document.getElementById('subtract-btn').addEventListener('click', () => {
  store.dispatch(subtract(getValue()));
});

document.getElementById('reset-btn').addEventListener('click', () => {
  store.dispatch(reset());
});


// HELPERS


/*/************************
  PART 2: UTILITY METHODS
/**************************/

const getValue = () => {
  const value = parseInt((document.getElementById('op-number') as HTMLInputElement).value);
  return isNaN(value) ? 0 : value;
};

const setTotal = (value: number) => {
  document.getElementById('grand-total').innerHTML = value.toString();
};
