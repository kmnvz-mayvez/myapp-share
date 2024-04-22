import { ObjectId } from "mongoose";
import { IRatingCategories, IReviewDocument } from "./review.interface";
import { ISellerDocument } from "./seller.interface";

export type FishType =
  | string
  | string[]
  | number
  | unknown
  | undefined;

export interface ICreateFish extends Record<string, FishType> {
  sellerId?: string;
  profilePicture?: string;
  title: string;
  categories: string;
  description: string;
  subCategories: string;
  tags: string[];
  price: number;
  stock: number;
  coverImage: string;
  expectedDelivery: string;
  basicTitle: string;
  basicDescription: string;
}

export interface ISellerFish {
  _id?: string | ObjectId;
  id?: string | ObjectId;
  sellerId?: string | ObjectId;
  title: string;
  username?: string;
  profilePicture?: string;
  email?: string;
  description: string;
  active?: boolean;
  categories: string;
  subCategories: string;
  tags: string[];
  ratingsCount?: number;
  ratingSum?: number;
  ratingCategories?: IRatingCategories;
  expectedDelivery: string;
  basicTitle: string;
  basicDescription: string;
  price: number;
  stock: number;
  coverImage: string;
  createdAt?: Date | string;
  sortId?: number;
  toJSON?: () => unknown;
}

export interface IFishContext {
  fish: ISellerFish;
  seller: ISellerDocument;
  isSuccess?: boolean;
  isLoading?: boolean;
}

export interface IFishProps {
  type?: string;
  fish?: ISellerFish;
}

export interface IFishCardItems {
  fish: ISellerFish;
  linkTarget: boolean;
  showEditIcon: boolean;
}

export interface ISelectedBudget {
  minPrice: string;
  maxPrice: string;
}

export interface IFishViewReviewsProps {
  showRatings: boolean;
  reviews?: IReviewDocument[];
}

export interface IFishInfo {
  total: number | string;
  title: string;
  bgColor: string;
}

export interface IFishTopProps {
  fishs: ISellerFish[];
  title?: string;
  subTitle?: string;
  category?: string;
  width: string;
  type: string;
}
