import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { IPhishingEmail } from "../../types/email";
import { EMAILS } from "../../mocks/emails";

export interface IPhishingState {
  emailList: string[];
  previousCampaigns: IPhishingCampaign[];
}

export interface IPhishingCampaign {
  date: string;
  employees: IPhishingEmail[];
}

const initialState: IPhishingState = {
  emailList: [],
  previousCampaigns: [
    {
      date: "2021-09-01",
      employees: EMAILS,
    },
  ],
};

export const phishingSlice = createSlice({
  name: "phisihing",
  initialState: initialState,
  reducers: {
    setEmailListState: (state, action: PayloadAction<string[]>) => {
      state.emailList = action.payload;
    },
    setPreviousCampaignsState: (
      state,
      action: PayloadAction<IPhishingCampaign[]>
    ) => {
      state.previousCampaigns = action.payload;
    },
    addEmailState: (state, action: PayloadAction<string>) => {
      const email = action.payload;
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return;
      }
      if (state.emailList.some((e) => e === email)) {
        return;
      }
      state.emailList.push(email);
    },
    deleteEmailState: (state, action: PayloadAction<string>) => {
      const email = action.payload;
      state.emailList = state.emailList.filter((e) => e !== email);
    },
    sendPhishingState: (state) => {
      const emailStatus = state.emailList.map((email) => ({
        email,
        clicked: false,
      }));
      const date = new Date();
      const campaign = {
        date: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
        employees: emailStatus,
      };
      state.previousCampaigns.push(campaign);
    },
  },
});

export default phishingSlice.reducer;

export const {
  addEmailState,
  deleteEmailState,
  sendPhishingState,
  setEmailListState,
  setPreviousCampaignsState,
} = phishingSlice.actions;
