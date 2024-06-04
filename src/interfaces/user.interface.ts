export interface IUser {
  _id: string;
  uid: string;
  fullName: string;
  email: string;
  phoneNumber?: string;
  role: string;
  profilePhoto?: string;
  isVerified: boolean;
}
