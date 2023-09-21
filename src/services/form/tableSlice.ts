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
      const localStorageData: FormState[] = loadFormDataFromLocalStorage()

      for (var i = localStorageData.length - 1; i >= 0; i--) {
        for (var j = 0; j < state.selectedData.length; j++) {
          if (localStorageData[i].key == state.selectedData[j]) {
            localStorageData.splice(i, 1);
            state.selectedData.splice(j, 1);
            break; 
          }
        }
      }
      localStorage.setItem('formData', JSON.stringify(localStorageData));

    }
  },

});

export const { setSortedInfo, setSelectedData, deleteSelectedData } = tableSlice.actions;

export default tableSlice.reducer;