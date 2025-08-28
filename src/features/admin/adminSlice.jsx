import { createSlice } from '@reduxjs/toolkit';
import adminData from '../../data/adminData.json';

const initialState = {
  users: adminData.users,
  merchants: adminData.merchants,
};

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {},
});

export default adminSlice.reducer;