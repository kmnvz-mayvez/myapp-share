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
  description: string;
  categories: string;
  subCategories: string[];
  tags: string[];
  price: number;
  stock: number;
  coverImage: string;
  expectedDelivery: string;
  nameFish: string;
  descriptionFish: string;
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
  subCategories: string[];
  tags: string[];
  ratingsCount?: number;
  ratingSum?: number;
  ratingCategories?: IRatingCategories;
  expectedDelivery: string;
  nameFish: string;
  descriptionFish: string;
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
  category?: string;
  width: string;
  type: string;
}

// Additional Request

export interface IFishBulkRequest {
  requestId?: string | ObjectId;     
  buyerId: string | ObjectId;        
  categories: string;                  
  quantity: number;            
  price?: number;           
  preferredDeliveryDate?: string;    
  description?: string;              
  status?: string;                   // Status from request
  fulfilledBy?: FulfillmentDetail[]; 
  createdAt?: Date | string;        
  updatedAt?: Date | string;        
}

export interface FulfillmentDetail {
  sellerId: string | ObjectId;    
  quantityFulfilled: number;      
  pricePerTon: number;            
  deliveryDate: string;           
}

export interface IFishBulkRequestContext {
  request: IFishBulkRequest;      
  sellers: ISellerDocument[];     
  isSuccess?: boolean;            
  isLoading?: boolean;            
}
