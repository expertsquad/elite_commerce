export interface Meta {
  limit: number;
  page: number;
  total: number;
}

export interface AddressData {
  _id: string;
  isDefault: boolean;
  isBilling: boolean;
  firstName: string;
  lastName: string;
  state: string;
  country: string;
  streetAddress: string;
  phoneNumber: string;
  zipCode: number;
  companyName: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface ResponseShippingAddress {
  success: boolean;
  message: string;
  meta: Meta;
  data: AddressData[];
}
