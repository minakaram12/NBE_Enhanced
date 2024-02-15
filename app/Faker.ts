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
export const validationList = [
  'Lower case letter',
  'Minimum 8 characters',
  'Special character',
  'Upper case letter',
  'Number',
];
