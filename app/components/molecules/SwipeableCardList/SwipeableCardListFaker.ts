import { ViewStyle } from 'react-native';
import {DetailedCardProps} from '../../atoms/DetailedCard/DetailedCard.component';
import { DetailedCardExtraProps } from './SwipeableCardList';

export interface ExtendedCardProps extends DetailedCardProps {
  key: string;
}

export const detailedCardPropsArray: ExtendedCardProps[] = [
  {
    name: 'John Doe',
    mobileNumber: '1234567890',
    balance: '100.00',
    image: require('../../../assets/images/profimg.jpg'),
    color: 'white',
    key: '1',
  },
  {
    name: 'Jane Smith',
    mobileNumber: '9876543210',
    balance: '50.00',
    image: require('../../../assets/images/profimg.jpg'),
    key: '2',
    // No color and viewStyle specified for this item
  },
  {
    name: 'Alice Johnson',
    mobileNumber: '5555555555',
    balance: '75.50',
    image: require('../../../assets/images/profimg.jpg'),
    color: 'white',
    key: '3',
  },
  {
    name: 'Bob Williams',
    mobileNumber: '9998887777',
    balance: '120.75',
    image: require('../../../assets/images/profimg.jpg'),
    color: 'white',
    key: '4',
  },
  {
    name: 'Eva Davis',
    mobileNumber: '3333333333',
    balance: '90.25',
    image: require('../../../assets/images/profimg.jpg'),
    key: '5',
    // No color and viewStyle specified for this item
  },
  {
    name: 'Michael Johnson',
    mobileNumber: '4444444444',
    balance: '60.80',
    image: require('../../../assets/images/profimg.jpg'),
    color: 'white',
    key: '6',
  },
  {
    name: 'Sophia Wilson',
    mobileNumber: '7777777777',
    balance: '150.50',
    image: require('../../../assets/images/profimg.jpg'),
    color: 'white',
    key: '7',
  },
  {
    name: 'David Brown',
    mobileNumber: '6666666666',
    balance: '80.20',
    image: require('../../../assets/images/profimg.jpg'),
    key: '8',
    // No color and viewStyle specified for this item
  },
  {
    name: 'Olivia Davis',
    mobileNumber: '2222222222',
    balance: '95.75',
    image: require('../../../assets/images/profimg.jpg'),
    color: 'white',
    key: '9',
  },
  {
    name: 'William White',
    mobileNumber: '1111111111',
    balance: '110.00',
    image: require('../../../assets/images/profimg.jpg'),
    color: 'white',
    key: '10',
  },
];

// Define the interface for an individual object in the list
export interface Beneficiary {
  name?: string;
  mobileNumber?: string;
  balance?: string;
  image?: any;
  color?: string;
  key?: string;
  accountNumber?: string;
  phoneNumber?: string;
  email?: string;
  ViewStyle?: ViewStyle;
}

// Define the type for the array of beneficiaries
const objectsList: Beneficiary[] = [];

for (let i = 0; i < 12; i++) {
  const randomFirstName = 'John' + i;
  const randomLastName = 'Doe' + i;
  const randomPhoneNumber = '0126520' + Math.floor(Math.random() * 10000);
  const randomAccountNumber = '1000' + Math.floor(Math.random() * 1000000);
  const randomEmail = `john.doe${Math.floor(Math.random() * 100)}@example.com`;

  // Define the type for an individual object
  const newObject: Beneficiary = {
    name: randomFirstName + ' ' + randomLastName,
    mobileNumber: randomPhoneNumber,
    balance: '999',
    image: require('../../../assets/images/profimg.jpg'), // You might want to specify a more specific type for the image
    color: '#ffffff',
    key: randomFirstName + ' ' + randomLastName,
    accountNumber: randomAccountNumber,
    phoneNumber: randomPhoneNumber,
    email: randomEmail,
  };

  objectsList.push(newObject);
}

export default objectsList;
