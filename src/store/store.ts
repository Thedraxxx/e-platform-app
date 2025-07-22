import authSlice from "@/src/store/Auth/userSlice"
import { configureStore } from "@reduxjs/toolkit"

export const store = configureStore({
    reducer: {
        auth: authSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
