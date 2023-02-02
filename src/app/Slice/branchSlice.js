import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  branch: [
    {
      name: "John Doe",
      img: "https://source.unsplash.com/random",
      address: "123 Main Street, Anytown USA 12345",
      services: [
        {
          name: "Haircut",
          price: 25,
        },
        {
          name: "Shampoo",
          price: 10,
        },
      ],
    },
    {
      name: "Jane Doe",
      img: "https://source.unsplash.com/random",
      address: "456 Park Avenue, Anytown USA 67890",
      services: [
        {
          name: "Manicure",
          price: 20,
        },
        {
          name: "Pedicure",
          price: 30,
        },
      ],
    },
    {
      name: "Jim Smith",
      img: "https://source.unsplash.com/random",
      address: "789 Elm Street, Anytown USA 101112",
      services: [
        {
          name: "Haircolor",
          price: 50,
        },
        {
          name: "Blow Dry",
          price: 25,
        },
      ],
    },
    {
      name: "Sarah Johnson",
      img: "https://source.unsplash.com/random.jpg",
      address: "246 8th Avenue, Anytown USA 131415",
      services: [
        {
          name: "Facial",
          price: 75,
        },
        {
          name: "Massage",
          price: 100,
        },
      ],
    },
    {
      name: "Sarah Johnson",
      img: "https://source.unsplash.com/random.jpg",
      address: "246 8th Avenue, Anytown USA 131415",
      services: [
        {
          name: "Facial",
          price: 75,
        },
        {
          name: "Massage",
          price: 100,
        },
      ],
    },
    {
      name: "Sarah Johnson",
      img: "https://source.unsplash.com/random.jpg",
      address: "246 8th Avenue, Anytown USA 131415",
      services: [
        {
          name: "Facial",
          price: 75,
        },
        {
          name: "Massage",
          price: 100,
        },
      ],
    },
    {
      name: "Sarah Johnson",
      img: "https://source.unsplash.com/random.jpg",
      address: "246 8th Avenue, Anytown USA 131415",
      services: [
        {
          name: "Facial",
          price: 75,
        },
        {
          name: "Massage",
          price: 100,
        },
      ],
    },
    {
      name: "Sarah Johnson",
      img: "https://source.unsplash.com/random.jpg",
      address: "246 8th Avenue, Anytown USA 131415",
      services: [
        {
          name: "Facial",
          price: 75,
        },
        {
          name: "Massage",
          price: 100,
        },
      ],
    },
    {
      name: "Sarah Johnson",
      img: "https://source.unsplash.com/random.jpg",
      address: "246 8th Avenue, Anytown USA 131415",
      services: [
        {
          name: "Facial",
          price: 75,
        },
        {
          name: "Massage",
          price: 100,
        },
      ],
    },
  ],
};

export const branchSlice = createSlice({
  name: "branch",
  initialState,
  reducers: {
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
  branchFilterByLocation,
  resetToInitialBranchState,
  branchFilterByName,
} = branchSlice.actions;
export default branchSlice.reducer;
