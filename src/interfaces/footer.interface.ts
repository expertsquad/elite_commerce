export interface ISocialMedia {
  _position: number;
  icon: string;
  link: string;
  isActive: boolean;
  _id: string;
  id: string;
}

export interface IFooterMenu {
  menuName: string;
  children: [
    {
      title: string;
      link: string;
      isActive: boolean;
      _id: string;
      id: string;
    }
  ];
  _id: string;
  id: string;
}

export interface IFooter {
  _id: string;
  id: string;
  description: string;
  appstoreLink: string;
  playstoreLink: string;
  copyright: string;
  paymentLogos: string;
  socialMedias: ISocialMedia[];
  menus: IFooterMenu[];
}
