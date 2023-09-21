import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { SorterResult } from 'antd/es/table/interface';
import { FormState } from './formSlice';

interface TableState {
  sortedInfo: SorterResult<FormState>;
  selectedData: [];
}

const initialState: TableState = {
  sortedInfo: {},
  selectedData: [],
};

const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    setSortedInfo: (state: any, action: PayloadAction<SorterResult<FormState>>) => {
      state.sortedInfo = action.payload;
    },
    setSelectedData: (state, action) => {
      console.log(action.payload)
      state.selectedData = action.payload
      console.log(state.selectedData)
    },
    clearSelectedData: (state) => {
      state.selectedData = []
    },
  },

});

export const { setSortedInfo } = tableSlice.actions;

export default tableSlice.reducer;