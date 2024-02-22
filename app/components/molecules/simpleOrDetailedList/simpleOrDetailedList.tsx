import {useState} from 'react';
import SimpleCardList from '../SimpleCardList/SimpleCardList';
import SwipeableCardList from '../SwipeableCardList/SwipeableCardList';
import {simpleCardsArray} from '../SimpleCardList/simpleCardListFaker';
import BeneficiariesController from '../Beneficiaries-controller/BeneficiariesController.component';
import { StyleSheet } from 'react-native';


function SimpleOrDetailedList() {
  const [colView, setterColView] = useState(true);

  return (
    <>
      <BeneficiariesController style={styles.controller} changeViewSetter={setterColView} />
      {colView ? (
        <SimpleCardList cards={simpleCardsArray} />
      ) : (
        <SwipeableCardList />
      )}
    </>
  );
}
const styles = StyleSheet.create({controller:{marginBottom:10}})
export default SimpleOrDetailedList;
