import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './services/counter/counterSlice'
import formReducer from './services/form/formSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    form: formReducer,

  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch