import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  name: '',
  password: '',
};

export const inputSlice = createSlice({
  name: 'inputReducer',
  initialState,
  reducers: {
    setInputData: (state, data) => {
      state.name = data;
    },
    setInputPassowrd: (state, password) => {
      state.password = password;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setInputData, setInputPassowrd} = inputSlice.actions;

export default inputSlice.reducer;
