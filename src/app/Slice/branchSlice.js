import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  branch: [],
};

export const branchSlice = createSlice({
  name: "branch",
  initialState,
  reducers: {
    setBranch: (state, action) => {
      state.branch = action.payload;
      console.log(state.branch);
    },
    branchFilterByName: (state, action) => {
      state.branch = state.branch.filter((item) =>
        item.name.toLocaleLowerCase().match(action.payload.toLocaleLowerCase())
      );
    },
    branchFilterByLocation: (state, action) => {
      state.branch = state.branch.filter((item) =>
        item.address
          .toLocaleLowerCase()
          .match(action.payload.toLocaleLowerCase())
      );
    },
    resetToInitialBranchState: (state) => {
      Object.assign(state, initialState);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setBranch,
  branchFilterByLocation,
  resetToInitialBranchState,
  branchFilterByName,
} = branchSlice.actions;
export default branchSlice.reducer;
