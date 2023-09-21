import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  saveFormDataToLocalStorage,
  loadFormDataFromLocalStorage,
} from '../utils/localStorage';

export interface FormState {
  name: string;
  email: string;
}

const initialState: FormState[] = loadFormDataFromLocalStorage();

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    resetForm: (state) => initialState,
    saveForm: (state: any, action: PayloadAction<FormState>) => {
      saveFormDataToLocalStorage(action.payload);
    },
  },
});

export const { saveForm, resetForm } = formSlice.actions;

export default formSlice.reducer;