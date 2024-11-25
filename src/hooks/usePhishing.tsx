import { data } from "autoprefixer";
import { apiFetch } from "../api/apiFetch";
import {
  addEmailState,
  deleteEmailState,
  IPhishingCampaign,
  sendPhishingState,
  setEmailListState,
  setPreviousCampaignsState,
} from "../store/slices/phishingSlice";
import { useAppDispatch, useAppSelector } from "./store";

export default function usePhishing() {
  const phishing = useAppSelector((state) => state.phishing);
  const currentUser = useAppSelector((state) => state.auth.currentUser);
  const diagnostic = useAppSelector((state) => state.diagnostic);
  const dispatch = useAppDispatch();

  const { emailList, previousCampaigns } = phishing;

  const setEmailList = (emailList: string[]) => {
    dispatch(setEmailListState(emailList));
  };

  const setPreviousCampaigns = (previousCampaigns: IPhishingCampaign[]) => {
    dispatch(setPreviousCampaignsState(previousCampaigns));
  };

  const addEmail = (email: string) => {
    if (!currentUser) return;
    apiFetch(`/phishing/emails/${currentUser.username}`, {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    dispatch(addEmailState(email));
  };

  const deleteEmail = (email: string) => {
    if (!currentUser) return;
    apiFetch(`/phishing/emails/${currentUser.username}`, {
      method: "DELETE",
      body: JSON.stringify({ email }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    dispatch(deleteEmailState(email));
  };

  const sendPhishing = () => {
    if (!currentUser) return;
    const date = new Date();
    apiFetch(`/phishing/send-phishing/${currentUser.username}`, {
      method: "POST",
      body: JSON.stringify({
        emails: emailList,
        companyName: diagnostic.companyName,
        date: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    dispatch(sendPhishingState());
  };

  return {
    setEmailList,
    emailList,
    previousCampaigns,
    addEmail,
    deleteEmail,
    sendPhishing,
    setPreviousCampaigns,
  };
}
