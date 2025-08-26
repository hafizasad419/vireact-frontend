import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface UserData {
    id: string;
    name: string;
    email: string;
    avatar?: string;
    preferences?: Record<string, any>;
}

const initialState: UserData = {
    id: "",
    name: "",
    email: "",
    avatar: "",
    preferences: {}
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserData: (state, action: PayloadAction<UserData>) => {
            return { ...state, ...action.payload };
        },
        clearUserData: () => initialState,
        updatePreferences: (state, action: PayloadAction<Record<string, any>>) => {
            state.preferences = { ...state.preferences, ...action.payload };
        }
    }
});

export const { setUserData, clearUserData, updatePreferences } = userSlice.actions;
export default userSlice.reducer;
