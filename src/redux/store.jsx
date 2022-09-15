import {configureStore} from '@reduxjs/toolkit';
import userSlice from './userReducer';
import inputSlice from './inputReducer';

const store = configureStore({
  reducer: {
    users: userSlice,
    input: inputSlice,
  },
});

export default store;
// export default store;
