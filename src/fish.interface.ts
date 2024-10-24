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
  requestId?: string | ObjectId;     // ID permintaan yang dihasilkan secara otomatis
  buyerId: string | ObjectId;        // ID pembeli yang mengajukan permintaan
  fishType: string;                  // Jenis ikan yang diminta (misalnya, "Salmon", "Lele", dll.)
  quantityInTons: number;            // Jumlah ikan yang diminta dalam satuan ton
  maxPricePerTon?: number;           // Harga maksimal per ton yang diinginkan pembeli
  preferredDeliveryDate?: string;    // Tanggal pengiriman yang diharapkan
  description?: string;              // Deskripsi tambahan atau permintaan khusus
  status?: string;                   // Status dari permintaan
  fulfilledBy?: FulfillmentDetail[]; // Daftar penjual yang memenuhi permintaan
  createdAt?: Date | string;         // Tanggal saat permintaan dibuat
  updatedAt?: Date | string;         // Tanggal saat permintaan terakhir diperbarui
}

export interface FulfillmentDetail {
  sellerId: string | ObjectId;    // ID penjual yang memenuhi sebagian atau seluruh permintaan
  quantityFulfilled: number;      // Jumlah ikan yang dipenuhi oleh penjual (dalam ton)
  pricePerTon: number;            // Harga per ton yang disepakati dengan penjual
  deliveryDate: string;           // Tanggal pengiriman yang disepakati
}

export interface IFishBulkRequestContext {
  request: IFishBulkRequest;      // Data permintaan ikan secara bulk
  sellers: ISellerDocument[];     // Data penjual yang terlibat
  isSuccess?: boolean;            // Status keberhasilan proses
  isLoading?: boolean;            // Status pemrosesan
}
