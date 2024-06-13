export type IUserMe = {
  _id: string;
  uid: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  role: string;
  isVerified: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
  emailVerificationToken: string;
  resetToken: string;
  accessTokenValidity: {
    isDayExtended: boolean;
  };
  profilePhoto: string;
  id: string;
};
