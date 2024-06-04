export interface ISliderElement {
  backgroundPhoto?: string;
  backgroundColor?: string;
  productPhoto?: string;
  sliderTag?: string;
  title?: string;
  price?: number;
  discountPercentage?: number;
  buttonText?: string;
  link?: string;
  description?: string;
}

export interface ITopBottomOffer {
  backgroundPhoto?: string;
  backgroundColor?: string;
  productPhoto?: string;
  title?: string;
  offerTag?: string;
  price?: number;
  buttonText?: string;
  link?: string;
}

export interface ISlider {
  slider?: {
    firstSlider?: ISliderElement;
    secondSlider?: ISliderElement;
    thirdSlider?: ISliderElement;
  };
  topOffer?: ITopBottomOffer;
  bottomOffer?: ITopBottomOffer;
}
