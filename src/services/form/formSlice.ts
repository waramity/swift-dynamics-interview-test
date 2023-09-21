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
      const { birthDate, citizenId, email, name, role, telephone } = action.payload;

      saveFormDataToLocalStorage({ birthDate, citizenId, email, name, role, telephone });
      return [action.payload, ...state];
    },
  },
});

export const { saveForm, resetForm } = formSlice.actions;

export default formSlice.reducer;