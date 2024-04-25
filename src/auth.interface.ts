declare global {
  namespace Express {
    interface Request {
      currentUser?: IAuthPayload;
    }
  }
}

export interface IAuthPayload {
  iat?: number;
  id: number;
  username: string;
  email: string;
}

export interface IAuth {
  profilePicture?: string;
  username?: string;
  password?: string;
  email?: string;
  address?: string;
  phoneNumber?: string;
}

export interface IAuthDocument {
  id?: number;
  profilePublicId?: string;
  username?: string;
  email?: string;
  password?: string;
  address?: string;
  phoneNumber?: string;
  profilePicture?: string;
  emailVerified?: number;
  emailVerificationToken?: string;
  createdAt?: Date;
  updatedAt?: Date;
  passwordResetToken?: string;
  passwordResetExpires?: Date;
  comparePassword(password: string): Promise<boolean>;
  hashPassword(password: string): Promise<string>;
}

export interface IAuthBuyerMessageDetails {
  username?: string;
  profilePicture?: string;
  email?: string;
  address?: string;
  phoneNumber?: string;
  createdAt?: Date;
  type?: string;
}

export interface IEmailMessageDetails {
  receiverEmail?: string;
  template?: string;
  verifyLink?: string;
  resetLink?: string;
  username?: string;
}

export interface ISignUpPayload {
  [key: string]: string;
  username: string;
  password: string;
  email: string;
  address: string;
  phoneNumber: string;
}

export interface ISignInPayload {
  [key: string]: string;
  username: string;
  password: string;
}

export interface IForgotPassword {
  email: string;
}

export interface IResetPassword {
  [key: string]: string;
  password: string;
  confirmPassword: string;
}

export interface IReduxAuthPayload {
  authInfo?: IAuthDocument;
}

export interface IReduxAddAuthUser {
  type: string;
  payload: IReduxAuthPayload;
}

export interface IReduxLogout {
  type: string;
  payload: boolean;
}

export interface IAuthResponse {
  message: string;
}

export interface IAuthUser {
  profilePublicId: string | null;
  id: number | null;
  profilePicture: string | null;
  username: string | null;
  address: string | null;
  phoneNumber: string | null;
  email: string | null;
  emailVerificationToken: string | null;
  emailVerified: boolean | null;
  passwordResetExpires: Date | null;
  passwordResetToken: null | null;
  createdAt: Date | null;
  updatedAt: Date | null;
}
