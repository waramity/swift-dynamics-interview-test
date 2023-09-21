import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { SorterResult } from 'antd/es/table/interface';
import { FormState } from './formSlice';
import { loadFormDataFromLocalStorage, saveFormDataToLocalStorage } from '../utils/localStorage';

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
      console.log(state.selectedData);
    },
    clearSelectedData: (state) => {
      state.selectedData = [] 
    },
    deleteSelectedData: (state) => {
      const localStorageData = loadFormDataFromLocalStorage()

      for (let i = 0; i < state.selectedData.length; i++) {
        console.log(state.selectedData[i]);
      }

      console.log(localStorageData)
      const updatedSelectedData = localStorageData.filter((item: FormState, index: number)=> { return item.key != state.selectedData[index]});
      console.log(updatedSelectedData)
      localStorage.setItem('formData', JSON.stringify(updatedSelectedData));

    }
  },

});

export const { setSortedInfo, setSelectedData, deleteSelectedData } = tableSlice.actions;

export default tableSlice.reducer;