import popupReducer from './popup/popupReducer';
const { createStore, combineReducers } = require('redux');

const rootReducer = combineReducers({
  popup: popupReducer,
});

const store = createStore(rootReducer);

export default store;
