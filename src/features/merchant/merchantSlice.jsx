import { createSlice } from '@reduxjs/toolkit';
import merchantData from '../../data/merchantData.json';

const initialState = {
  purchases: merchantData.purchases,
  notifications: merchantData.notifications,
  purchaseApprovalLoading: {},
};

const merchantSlice = createSlice({
  name: 'merchant',
  initialState,
  reducers: {
    setPurchaseApprovalLoading: (state, action) => {
      state.purchaseApprovalLoading[action.payload] = true;
    },
    clearPurchaseApprovalLoading: (state, action) => {
      delete state.purchaseApprovalLoading[action.payload];
    },
    approvePurchase: (state, action) => {
      state.purchases = state.purchases.filter(p => p.id !== action.payload);
    },
  },
});

export const {
  setPurchaseApprovalLoading,
  clearPurchaseApprovalLoading,
  approvePurchase,
} = merchantSlice.actions;

export default merchantSlice.reducer;
