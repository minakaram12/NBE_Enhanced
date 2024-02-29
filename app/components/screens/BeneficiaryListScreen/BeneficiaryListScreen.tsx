import React from 'react';
import SimpleOrDetailedList from '../../molecules/simpleOrDetailedList/simpleOrDetailedList';
function BenefiiciaryListScreen({route}) {
  const {newCards = []} = route.params || {};
  return (
    <>
      <SimpleOrDetailedList newCards={newCards} />
    </>
  );
}

export default BenefiiciaryListScreen;
