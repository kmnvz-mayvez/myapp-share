import { ObjectId } from "mongoose";

export interface IBuyerDocument {
  _id?: string | ObjectId;
  username?: string;
  email?: string;
  profilePicture?: string;
  address: string;
  phoneNumber: string;
  isSeller?: boolean;
  purchasedFish: string[];
  createdAt?: Date | string;
  updatedAt?: Date | string;
}

export interface IReduxBuyer {
  type?: string;
  payload: IBuyerDocument;
}
