import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});
//Actions
export const { changeFilter } = filtersSlice.actions;

//Reducer
export default filtersSlice.reducer;

//Selectors
export const selectNameFilter = (state) => state.filters.name;
