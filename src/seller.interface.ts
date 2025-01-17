import { ObjectId } from "mongoose";
import { IRatingCategories } from "./review.interface";

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
  | unknown
  | undefined;

export interface IPond {
  [key: string]: string | number | undefined;
  _id?: string;
  namePond: string;
  typePond: string;
  sizePond: number;
  location: string;
}

export interface IProduction {
  [key: string]: string | number | undefined;
  _id?: string;
  nameProduction: string;
  description: string;
  startDate: string;
  endDate: string;
  totalProduction: number;
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
  phoneNumber: string;
  ratingsCount?: number;
  ratingSum?: number;
  ratingCategories?: IRatingCategories;
  pond: IPond[];
  production: IProduction[];
  responseTime: number;
  recentDelivery?: Date | string;
  ongoing?: number;
  completed?: number;
  cancelled?: number;
  totalEarnings?: number;
  totalFishs?: number;
  paypal?: string;
  createdAt?: Date | string;
}
