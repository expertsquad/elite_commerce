export interface IAddress {
  _id: string;
  isDefault: boolean;
  isBilling: boolean;
  firstName: string;
  lastName: string;
  streetAddress: string;
  state: string;
  country: string;
  companyName?: string;
  zipCode: number;
  phoneNumber: string;
  userId: string;
}
