import { ObjectId } from "mongoose";
import { IRatingCategories } from "./review.interface";

// By extending with the Record<string, any> 
// string keys with any values along with those defined in the interface.

export type SellerType =
  | string
  | string[]
  | number
  | IRatingCategories
  | Date
  | IPond
  | IPond[]
  | IProduction
  | IProduction[]
  | IStock
  | IStock[]
  | unknown
  | undefined;

export interface IPond {
  [key: string]: string | number | undefined;
  _id?: string;
  namePond: string;
  typePond: string;
  sizePond: string;
  location: string;
}

export interface IProduction {
  [key: string]: string | number | boolean | undefined;
  _id?: string;
  startDate: string;
  endDate: string;
  totalProduction: string;
  description: string;
  currentlyWorkingHere: boolean | undefined;
}

export interface IStock {
  [key: string]: string | number | undefined;
  _id?: string;
  quantity: string;
}

export interface ISellerDocument extends Record<string, SellerType> {
  _id?: string | ObjectId;
  profilePublicId?: string;
  fullName: string;
  username?: string;
  email?: string;
  profilePicture?: string;
  description: string;
  address: string;
  ratingsCount?: number;
  ratingSum?: number;
  ratingCategories?: IRatingCategories;
  pond: IPond[];
  responseTime: number;
  recentDelivery?: Date | string;
  production: IProduction[];
  stock: IStock[];
  ongoing?: number;
  completed?: number;
  cancelled?: number;
  totalEarnings?: number;
  paypal?: string; // needed
  createdAt?: Date | string;
}
