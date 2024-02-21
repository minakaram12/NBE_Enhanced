import React from 'react';
import AccountSummarySvg from './assets/svgs/AccountSummarySvg';
import CertificatesSvg from './assets/svgs/CertificatesSvg';
import PaymentSvg from './assets/svgs/PaymentSvg';
import CardsServicesSvg from './assets/svgs/CardsServicesSvg';
import HardTokenSvg from './assets/svgs/HardTokenSvg';
import OffersSvg from './assets/svgs/OffersSvg';
import CustomerServicesSvg from './assets/svgs/CustomerServicesSvg';
import CalculatorsSvg from './assets/svgs/CalculatorsSvg';
import DarkModeSvg from './assets/svgs/DarkModeSvg';
import {SvgProps} from 'react-native-svg';
export interface MenuItems {
  text: string;
  icon: React.FC<SvgProps>;
}

export const myArray: MenuItems[] = [
  {
    text: 'Account Summary',
    icon: AccountSummarySvg,
  },
  {
    text: 'Open Certificates & Deposits',
    icon: CertificatesSvg,
  },
  {
    text: 'Payement Services',
    icon: PaymentSvg,
  },

  {
    text: 'Cards Services',
    icon: CardsServicesSvg,
  },
  {
    text: 'Hard Token',
    icon: HardTokenSvg,
  },
  {
    text: 'Offers',
    icon: OffersSvg,
  },
  {
    text: 'Customer Services',
    icon: CustomerServicesSvg,
  },
  {
    text: 'Calculators',
    icon: CalculatorsSvg,
  },
  {
    text: 'Dark Mode',
    icon: DarkModeSvg,
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

export const transferType = [
  {key: '1', value: 'Between your accounts'},
  {key: '2', value: 'from your account to different account'},
  {key: '3', value: 'from debit to credit'},
];

export const transferFrom = [
  {key: '1', value: '042-653214521245 - $20'},
  {key: '2', value: '042-653214521245 - $5000'},
  {key: '3', value: '042-653214521245 - $3,145,58.25'},
];

export const transferTo = [
  {key: '1', value: '056-32154875423 - $1,523.48'},
  {key: '2', value: '055-32154875423 - $523.48'},
  {key: '3', value: '057-32154875423 - $10,523.48'},
];

export const markers = [
  {
    latitude: 30.066974205840264,
    longitude: 31.336983717513284,
  },
  {
    latitude: 30.068640962863853,
    longitude: 31.344582905246888,
  },
  {
    latitude: 30.067383242717057,
    longitude: 31.330059911548595,
  },
];
