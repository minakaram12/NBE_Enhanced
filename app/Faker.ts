import React from 'react';
import AccountSummarySvg from './assets/svgs/AccountSummarySvg';
import CertificatesSvg from './assets/svgs/CertificatesSvg';
import PaymentSvg from './assets/svgs/PaymentSvg';
import CardsServicesSvg from './assets/svgs/CardsServicesSvg';
import HardTokenSvg  from './assets/svgs/HardTokenSvg';
import OffersSvg from './assets/svgs/OffersSvg';
import CustomerServicesSvg from './assets/svgs/CustomerServicesSvg';
import CalculatorsSvg from './assets/svgs/CalculatorsSvg';
import DarkModeSvg from './assets/svgs/DarkModeSvg';
import { SvgProps } from 'react-native-svg';
export interface MenuItems {
    text: string;
    icon:React.FC<SvgProps>;

}

export const myArray: MenuItems[] = [
    {
        text: "Account Summary",
        icon:AccountSummarySvg
    },
    {
        text: "Open Certificates & Deposits",
        icon:CertificatesSvg
    },
    {
        text: "Payement Services",
        icon:PaymentSvg
    },

    {
        text: "Cards Services",
        icon:CardsServicesSvg
    },
    {
        text: "Hard Token",
        icon:HardTokenSvg
    },
    {
        text: "Offers",
        icon:OffersSvg
    },
    {
        text: "Customer Services",
        icon:CustomerServicesSvg
    },
    {
        text: "Calculators",
        icon:CalculatorsSvg
    },
    {
        text: "Dark Mode",
        icon:DarkModeSvg
    },
  ];

  export interface ValidationList {
    text: string;
    state: boolean;
  }

  export const validationList: ValidationList[] = [
    {
      text: 'Lower case letter',
      state: false,
    },
    {
      text: 'Minimum 8 characters',
      state: false,
    },
    {
      text: 'Special character',
      state: false,
    },
    {
      text: 'Upper case letter',
      state: false,
    },
    {
      text: 'Number',
      state: false,
    },
  ];
