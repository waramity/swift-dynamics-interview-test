import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { SorterResult } from 'antd/es/table/interface';
import { FormState } from './formSlice';

interface TableState {
  sortedInfo: SorterResult<FormState>;
}

const initialState: TableState = {
  sortedInfo: {},
};

const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    setSortedInfo: (state: any, action: PayloadAction<SorterResult<FormState>>) => {
      state.sortedInfo = action.payload;
    },
  },

});

export const { setSortedInfo } = tableSlice.actions;

export default tableSlice.reducer;