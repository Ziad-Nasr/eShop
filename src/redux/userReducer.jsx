import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  id: 0,
  name: '',
};

export const userSlice = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    setUserData: (state, id, data) => {
      state.id = id;
      state.name = data;
    },
    // getUserData: (state, data) => {
    //   //pass
    // },
  },
});

// Action creators are generated for each case reducer function
export const {setUserData, getUserData} = userSlice.actions;

export default userSlice.reducer;
