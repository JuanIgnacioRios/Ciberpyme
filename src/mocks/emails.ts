import { IPhishingEmail } from "../types/email";

export const EMAILS: IPhishingEmail[] = [
  {
    email: "test@gmail.com",
    sent: false,
    clicked: false,
  },
  {
    email: "test2@gmail.com",
    sent: true,
    clicked: false,
  },
  {
    email: "test3@gmail.com",
    sent: true,
    clicked: true,
  },
];
