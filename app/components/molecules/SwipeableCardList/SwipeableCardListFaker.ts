import {DetailedCardProps} from '../../atoms/DetailedCard/DetailedCard.component';

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

// Now detailedCardPropsArray is an array of 10 items with the DetailedCardProps type
