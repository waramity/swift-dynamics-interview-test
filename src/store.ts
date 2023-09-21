import { configureStore } from '@reduxjs/toolkit'
import formReducer from './services/form/formSlice'
import tableReducer from './services/form/tableSlice'

export const store = configureStore({
  reducer: {
    form: formReducer,
    table: tableReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false
    }),

})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch