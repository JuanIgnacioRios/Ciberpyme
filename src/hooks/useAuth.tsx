import { useNavigate } from "react-router-dom";
import {
  setCurrentUserState,
  setLoadingState,
} from "../store/slices/authSlice";
import { IUser } from "../types/user";
import { useAppDispatch, useAppSelector } from "./store";

export default function useAuth() {
  const auth = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { isLoading, currentUser } = auth;

  const updateLoadingState = (value: boolean) => {
    dispatch(setLoadingState(value));
  };

  const setCurrentUser = (value: IUser | null) => {
    dispatch(setCurrentUserState(value));
  };

  const signIn = (user: IUser) => {
    setCurrentUser(user);
    navigate("/preguntas-diagnostico");
  };

  const signOut = () => {
    setCurrentUser(null);
    navigate("/");
  };

  return {
    isLoading,
    currentUser,
    setCurrentUser,
    updateLoadingState,
    signIn,
    signOut,
  };
}
