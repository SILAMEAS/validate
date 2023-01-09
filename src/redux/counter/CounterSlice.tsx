import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface CounterState {
  value: number;
  Email: string;
  Name: string;
  Password: string;
  DATA: any;
  GetOne: any;
  Num_cal: number;
}

const initialState: CounterState = {
  value: 0,
  Email: 'sok',
  Name: '',
  Password: '',
  DATA: [],
  GetOne: {},
  Num_cal: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,

  reducers: {
    Set_Num_cal: (state, action) => {
      state.Num_cal = action.payload;
    },
    increment: state => {
      state.value += 1;
    },
    setEmail: (state, action) => {
      state.Email = action.payload;
    },
    setName: (state, action) => {
      state.Name = action.payload;
    },
    setDATA: (state, action) => {
      //   console.log('Payload');
      //   console.log(action.payload);
      state.DATA = action.payload;
      //   console.log('DATA');
      //   console.log(state.DATA);
    },
    setOne: (state, action) => {
      state.GetOne = action.payload;
    },
    setPassword: (state, action) => {
      state.Password = action.payload;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  increment,
  decrement,
  incrementByAmount,
  setEmail,
  setName,
  setPassword,
  setDATA,
  setOne,
  Set_Num_cal,
} = counterSlice.actions;

export default counterSlice.reducer;
