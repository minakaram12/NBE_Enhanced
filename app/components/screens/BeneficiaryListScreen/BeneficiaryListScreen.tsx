import React from 'react';
import SimpleOrDetailedList from '../../molecules/simpleOrDetailedList/simpleOrDetailedList';
import {RouteProp} from '@react-navigation/native';

type RootStackParamList = {
  BeneficiaryList: {newCards?: any[]};
};

type BeneficiaryListRouteProp = RouteProp<
  RootStackParamList,
  'BeneficiaryList'
>;

interface BeneficiaryListProps {
  route: BeneficiaryListRouteProp;
}

function BeneficiaryListScreen({route}: BeneficiaryListProps) {
  const {newCards = []} = route.params || {};

  return (
    <>
      <SimpleOrDetailedList newCards={newCards} />
    </>
  );
}

export default BeneficiaryListScreen;
