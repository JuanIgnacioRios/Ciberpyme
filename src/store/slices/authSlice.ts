import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../types/user";
import { USER } from "../../mocks/user";

export interface IAuthState {
  isLoading: boolean;
  currentUser: IUser | null;
}

const initialState: IAuthState = {
  isLoading: false,
  currentUser: USER,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoadingState: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setCurrentUserState: (state, action: PayloadAction<IUser | null>) => {
      const userPayload = action.payload;
      return {
        ...state,
        currentUser: userPayload,
        isLoading: false,
      };
    },
  },
});

export default authSlice.reducer;

export const { setLoadingState, setCurrentUserState } = authSlice.actions;
