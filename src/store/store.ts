import authSlice from "@/src/store/Auth/userSlice"
import instituteSlice from "@/src/store/institute/institute"
import instTeacherSlice from "@/src/store/institute/teacher/instituteTeacher"
import uiSlice from "@/src/store/ui/uiSlice"
import { configureStore } from "@reduxjs/toolkit"
export const store = configureStore({
    reducer: {
        auth: authSlice,
        ui: uiSlice,
        institute: instituteSlice,
        instTeacher: instTeacherSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
