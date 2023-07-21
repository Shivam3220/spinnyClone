import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "User",
  initialState: {car:{
    brand: "",
    rto: "",
    year: "",
    model: "",
    varient: "",
    owner: "",
    kmDrive: "",
    when: "",}
  },
  reducers: {
    AddDetails: (state, action) => {
      state.car = action.payload
    },

    ClearDetails: (state) => {
      state = {
        brand: "",
        rto: "",
        year: "",
        model: "",
        varient: "",
        owner: "",
        kmDrive: "",
        when: "",
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { AddDetails, ClearDetails } = counterSlice.actions;

export default counterSlice.reducer;
