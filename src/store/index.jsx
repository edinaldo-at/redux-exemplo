import { configureStore } from "@reduxjs/toolkit";
import championsReducer from '../ducks/championsSlice';

const store = configureStore({
  reducer: {
    champions: championsReducer,

  },
});

export default store;