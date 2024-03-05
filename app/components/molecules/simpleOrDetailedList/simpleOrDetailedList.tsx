import React, {useEffect, useRef} from 'react';
import {useState} from 'react';
import SimpleCardList from '../SimpleCardList/SimpleCardList';
import SwipeableCardList from '../SwipeableCardList/SwipeableCardList';
import BeneficiariesController from '../Beneficiaries-controller/BeneficiariesController.component';
import {StyleSheet, View} from 'react-native';
import {layouts} from '../../../constants/styles';
import objectsList, {
  ExtendedCardProps,
} from '../SwipeableCardList/SwipeableCardListFaker';
import NoBeneficiary from '../../atoms/NoBeneficiaries/NoBeneficiaries';
import {theme} from '../../../theme/theme';

function SimpleOrDetailedList({newCards}) {
  const [colView, setterColView] = useState(true);
  const [beneficiaries, setBeneficiaries] =
    useState<Array<ExtendedCardProps>>(objectsList);
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
        <NoBeneficiary addBeneficiary={addBeneficiary} newCards={newCards} />
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
const styles = StyleSheet.create({
  controller: {marginBottom: 10},
  outerVeiw: {backgroundColor: theme?.BackgroundScreen},
});
export default SimpleOrDetailedList;
