import React, {useEffect, useRef, useState} from 'react';
import {View} from 'react-native';
import SimpleCardList from '../SimpleCardList/SimpleCardList';
import SwipeableCardList from '../SwipeableCardList/SwipeableCardList';
import BeneficiariesController from '../Beneficiaries-controller/BeneficiariesController.component';
import {layouts} from '../../../constants/styles';
import objectsList, {
  Beneficiary,
  ExtendedCardProps,
} from '../SwipeableCardList/SwipeableCardListFaker';
import NoBeneficiary from '../../atoms/NoBeneficiaries/NoBeneficiaries';
import {styles} from './simpleOrDetailedStyles';

interface SimpleOrDetailedListProps {
  newCards: Beneficiary[];
}

function SimpleOrDetailedList({newCards}: SimpleOrDetailedListProps) {
  const [colView, setterColView] = useState<boolean>(true);
  const [beneficiaries, setBeneficiaries] =
    useState<Beneficiary[]>(objectsList);
  const isFirstRenderRef = useRef(true);

  useEffect(() => {
    if (isFirstRenderRef.current) {
      setBeneficiaries(objectsList);
      isFirstRenderRef.current = false;
    } else {
      setBeneficiaries(newCards);
    }
  }, [newCards]);

  const addBeneficiary = (beneficiary: ExtendedCardProps) => {
    setBeneficiaries(oldBeneficiaries => [...oldBeneficiaries, beneficiary]);
  };

  const isempty = beneficiaries?.length <= 0 || beneficiaries?.length === 0;

  return (
    <View style={[layouts.px.lg, styles.outerVeiw, layouts.fullHeight]}>
      <BeneficiariesController
        style={styles.controller}
        changeViewSetter={setterColView}
        addBeneficiary={addBeneficiary}
        cards={beneficiaries}
      />

      {isempty ? (
        <NoBeneficiary />
      ) : colView ? (
        <SimpleCardList cards={beneficiaries} />
      ) : (
        <SwipeableCardList
          cards={beneficiaries}
          cardsSetter={setBeneficiaries}
        />
      )}
    </View>
  );
}

export default SimpleOrDetailedList;
