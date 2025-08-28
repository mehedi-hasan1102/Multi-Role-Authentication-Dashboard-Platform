import { createSlice } from '@reduxjs/toolkit';
import memberData from '../../data/memberData.json';

const initialState = {
  points: memberData.points,
};

const memberSlice = createSlice({
  name: 'member',
  initialState,
  reducers: {},
});

export default memberSlice.reducer;