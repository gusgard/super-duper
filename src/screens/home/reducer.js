import { handleActions } from 'redux-actions';
import update from 'immutability-helper';

import { ADD_ITEM } from './constants';

const initialState = {
  items: []
};

export default handleActions(
  {
    [ADD_ITEM]: (state, { payload: { item } }) =>
      update(state, {
        items: { $push: [item] }
      })
  },
  initialState
);
