import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  saveFormDataToLocalStorage,
  loadFormDataFromLocalStorage,
} from '../utils/localStorage';

export interface FormState {
  key: string;
  birthDate: Date;
  citizenId: string;
  email: string;
  name: string;
  role: string;
  telephone: {
    national: string;
    no: string;
  };
}

const initialState: FormState[] = loadFormDataFromLocalStorage();

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    resetForm: (state) => initialState,
    saveForm: (state: any, action: PayloadAction<FormState>) => {
      const key = Math.floor(Math.random() * 1000); 
      action.payload.key = String(key);

      saveFormDataToLocalStorage(action.payload);
      return [action.payload, ...state];
    },
  },
});

export const { saveForm, resetForm } = formSlice.actions;

export default formSlice.reducer;