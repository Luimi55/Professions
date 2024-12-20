import { configureStore } from '@reduxjs/toolkit';
import { UserSlice } from './reducers/UserSlice';

export const Store = configureStore({
    reducer: {
        User: UserSlice.reducer
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    //     serializableCheck: false,
    // }),
});
export type RootState = ReturnType<typeof Store.getState>
