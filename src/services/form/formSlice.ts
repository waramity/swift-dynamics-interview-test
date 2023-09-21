import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FormState {
  name: string;
  email: string;
}

const initialState: FormState = {
  name: '',
  email: '',
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateField: (state: any, action: PayloadAction<{ field: string; value: string }>) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    resetForm: (state) => initialState,
  },
});

export const { updateField, resetForm } = formSlice.actions;

export default formSlice.reducer;