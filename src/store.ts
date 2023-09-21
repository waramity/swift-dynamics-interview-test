import { configureStore } from '@reduxjs/toolkit'
import formReducer from './services/form/formSlice'

export const store = configureStore({
  reducer: {
    form: formReducer,

  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false
    }),

})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch