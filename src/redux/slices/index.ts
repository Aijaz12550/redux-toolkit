import { createSlice, nanoid } from "@reduxjs/toolkit";

interface InitialState {
  name: string;
  id: string;
}

let initialState = [
  {
    name: "aijaz",
    id: nanoid(),
  },
] as InitialState[];

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    test: (state) => {
      return [...state, { name: "aijaz", id: nanoid() }] as InitialState[];
    },
  },
});

export const { test } = slice.actions;

export const fetchAsync = () => {
  return async function (dispatch: any) {
    setTimeout(async () => {
      try {
        dispatch(test());
        dispatch(test());
        dispatch(test());
      } catch (err) {
        dispatch(test());
      }
    }, 2000);
  };
};

export default slice.reducer;
