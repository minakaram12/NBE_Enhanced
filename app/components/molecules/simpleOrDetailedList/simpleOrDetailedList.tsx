import React from 'react';
import {useState} from 'react';
import SimpleCardList from '../SimpleCardList/SimpleCardList';
import SwipeableCardList from '../SwipeableCardList/SwipeableCardList';
import BeneficiariesController from '../Beneficiaries-controller/BeneficiariesController.component';
import {StyleSheet, View} from 'react-native';
import {layouts} from '../../../constants/styles';
import {ExtendedCardProps, detailedCardPropsArray} from '../SwipeableCardList/SwipeableCardListFaker';
import NoBeneficiary from '../../atoms/NoBeneficiaries/NoBeneficiaries';
import { useTheme } from '../../../ContextAPI/ThemeContext';

function SimpleOrDetailedList() {
  const [colView, setterColView] = useState(true);
  const [beneficiaries, setBeneficiaries] = useState<Array<ExtendedCardProps>>(
    detailedCardPropsArray,
  );
   const addBeneficiary = (beneficiary: ExtendedCardProps) => {
    setBeneficiaries(oldBeneficiaries => [...oldBeneficiaries, beneficiary]);
  };

  const isempty = beneficiaries.length <= 0;

  return (
    <View
      style={[layouts.px.lg, {backgroundColor: useTheme().isDarkMode.BackgroundMenu}, layouts.fullHeight]}>
      <BeneficiariesController
        style={styles.controller}
        changeViewSetter={setterColView}
        addBeneficiary={addBeneficiary}
      />

      {isempty ? (
        <NoBeneficiary addBeneficiary={addBeneficiary} />
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
const styles = StyleSheet.create({controller: {marginBottom: 10}});
export default SimpleOrDetailedList;
