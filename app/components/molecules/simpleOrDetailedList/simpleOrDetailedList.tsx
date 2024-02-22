import {useState} from 'react';
import SimpleCardList from '../SimpleCardList/SimpleCardList';
import SwipeableCardList from '../SwipeableCardList/SwipeableCardList';
import {simpleCardsArray} from '../SimpleCardList/simpleCardListFaker';
import BeneficiariesController from '../Beneficiaries-controller/BeneficiariesController.component';
import {StyleSheet, View} from 'react-native';
import {layouts} from '../../../constants/styles';
import {ExtendedCardProps} from '../SwipeableCardList/SwipeableCardListFaker';
import NoBeneficiary from '../../atoms/NoBeneficiaries/NoBeneficiaries';

function SimpleOrDetailedList() {
  const [colView, setterColView] = useState(true);
  const [beneficiaries, setBeneficiaries] = useState<Array<ExtendedCardProps>>(
    [],
  );
  const addBeneficiary = (beneficiary: ExtendedCardProps) => {
    setBeneficiaries(oldBeneficiaries => [...oldBeneficiaries, beneficiary]);
  };
  const deleteBeneficiary = (beneficiary: ExtendedCardProps) => {
    setBeneficiaries(oldBeneficiaries => {
      const indexToDelete = oldBeneficiaries.findIndex(
        benef => benef.key === beneficiary.key,
      );

      // Check if the beneficiary was found in the array
      if (indexToDelete !== -1) {
        // Create a new array by copying the original array
        const updatedBeneficiaries = [...oldBeneficiaries];

        // Use splice to remove the beneficiary from the new array
        updatedBeneficiaries.splice(indexToDelete, 1);

        // Set the state with the updated array
        return updatedBeneficiaries;
      }

      // If the beneficiary was not found, return the original array
      return oldBeneficiaries;
    });
  };
  const isempty = beneficiaries.length <= 0;

  return (
    <View
      style={[layouts.px.lg, {backgroundColor: '#F1F3FB'}, layouts.fullHeight]}>
      <BeneficiariesController
        style={styles.controller}
        changeViewSetter={setterColView}
        addBeneficiary={addBeneficiary}
        deleteBeneficiary={deleteBeneficiary}
      />

      {isempty ? (
        <NoBeneficiary />
      ) : colView ? (
        <SimpleCardList cards={simpleCardsArray} />
      ) : (
        <SwipeableCardList />
      )}
    </View>
  );
}
const styles = StyleSheet.create({controller: {marginBottom: 10}});
export default SimpleOrDetailedList;
