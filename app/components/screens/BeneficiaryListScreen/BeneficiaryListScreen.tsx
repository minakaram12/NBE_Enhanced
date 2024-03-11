import React from 'react';
import SimpleOrDetailedList from '../../molecules/simpleOrDetailedList/simpleOrDetailedList';
import {benflistProps} from '../../atoms/BeneficiaryStack/navigationinfo';

function BeneficiaryListScreen({route}: benflistProps) {
  const {newCards = []} = route.params || {};

  return (
    <>
      <SimpleOrDetailedList newCards={newCards} />
    </>
  );
}

export default BeneficiaryListScreen;
