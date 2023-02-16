import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  calender: null,
};

export const calenderSlice = createSlice({
  name: "calender",
  initialState,
  reducers: {
    setCalender: (state, action) => {
      state.calender = action.payload;
    },
    addToCalender: (state, action) => {
      state.calender.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCalender, addToCalender } = calenderSlice.actions;

export default calenderSlice.reducer;
