import {StackScreenProps} from '@react-navigation/stack';
import {Beneficiary} from '../../molecules/SwipeableCardList/SwipeableCardListFaker';
export type RootStackParamList = {
  BenefiiciaryListScreen: {newCards: Array<Beneficiary>};
  AddBeneficiaries: {
    item?: Beneficiary;
    edit: boolean;
    prevIndex?: number | undefined;
    cards: Array<Beneficiary>;
  };
  BeneficiaryTransactionScreenComponent: {
    transactions: Array<any>;
    user: Beneficiary;
  };
};
export type benflistProps = StackScreenProps<
  RootStackParamList,
  'BenefiiciaryListScreen'
>;
export type addBenefprops = StackScreenProps<
  RootStackParamList,
  'AddBeneficiaries'
>;
