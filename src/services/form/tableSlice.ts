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
      state.selectedData = action.payload
    },
    clearSelectedData: (state) => {
      state.selectedData = [] 
    },
  },

});

export const { setSortedInfo, setSelectedData } = tableSlice.actions;

export default tableSlice.reducer;