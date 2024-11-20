import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface NumberState {
  // Explicitly exported
  value: number | null;
}

const initialState: NumberState = {
  value: null,
};

const numberSlice = createSlice({
  name: "number",
  initialState,
  reducers: {
    setNumber(state, action: PayloadAction<number>) {
      state.value = action.payload;
    },
  },
});

export const { setNumber } = numberSlice.actions;
export default numberSlice.reducer;
