import { createStore } from 'redux';

//creating initial state

const initialState = {
  user: {
    username: 'Safin Sulthan Narasapuram',
    balance: 25000,
  },
};

//creating action
export const addMoney = (amt) => ({
  type: 'addMoney',
  payload: amt,
});

export const withDraw = (amt) => ({
  type: 'withdraw',
  payload: amt,
});
//creating reducer function

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'addMoney':
      return {
        user: {
          username: state.user.username,
          balance: state.user.balance + action.payload,
        },
      };
    case 'withdraw':
      return {
        user: {
          username: state.user.username,
          balance: state.user.balance - action.payload,
        },
      };
    default:
      return state;
  }
}

const store = createStore(reducer);
export default store;
