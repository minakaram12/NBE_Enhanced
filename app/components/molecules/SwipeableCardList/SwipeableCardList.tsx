import React from 'react';
import {SwipeListView} from 'react-native-swipe-list-view';
import DetailedCard from '../../atoms/DetailedCard/DetailedCard.component';
import {Pressable} from 'react-native';
import HiddenItemWithActions from '../../atoms/hiddenItemWithActions/HiddenItemWithActions';

import {ExtendedCardProps} from './SwipeableCardListFaker';
import {Dispatch, SetStateAction} from 'react';
import {useNavigation} from '@react-navigation/native';

interface SwipeableCardListProps {
  cards: Array<ExtendedCardProps>;
  cardsSetter: Dispatch<SetStateAction<Array<ExtendedCardProps>>>;
}

const SwipeableCardList: React.FC<SwipeableCardListProps> = ({
  cards,
  cardsSetter,
}) => {
  const renderItem = data => {
    return (
      <Pressable>
        <DetailedCard
          name={data.item.name}
          mobileNumber={data.item.mobileNumber}
          balance={data.item.balance}
          image={data.item.image}
          color={data.item.color}
          viewStyle={data.item.ViewStyle}
        />
      </Pressable>
    );
  };

  const renderHiddenItem = (data, rowMap) => {
    return (
      <HiddenItemWithActions
        data={data}
        rowMap={rowMap}
        onDelete={() => deleteRow(rowMap, data.item.key)}
        onEdit={() => editRow(rowMap, data.item.key)}
      />
    );
  };

  const navigation = useNavigation();
  const deleteRow = (rowMap, id) => {
    console.log('====================================');
    console.log(`the id is ${id}`);
    console.log('====================================');
    closeSpecificRow(rowMap, id);
    const newData = [...cards];
    console.log('====================================');
    console.log(`cards before deletion ${newData}`);
    console.log('====================================');
    const prevIndex = newData.findIndex(item => item.key === id);
    console.log('the index of the deleted item is ' + prevIndex);
    newData.splice(prevIndex, 1);
    console.log('====================================');
    console.log(`cards after deletiono ${newData}`);
    console.log('====================================');
    cardsSetter(newData);
  };

  const closeSpecificRow = (rowMap, id) => {
    if (rowMap[id]) {
      rowMap[id].closeRow();
    }
  };

  const editRow = (rowMap, id) => {
    // do it later
    rowMap[id].closeRow();
    const newData = [...cards];
    const prevIndex = newData.findIndex(item => item.key === id);
    const item = newData[prevIndex];
    cards = newData;
    navigation.navigate('AddBeneficiaries', {
      item,
      edit: true,
      prevIndex,
      cards,
    }); //item is extended card
  };

  return (
    <SwipeListView
      data={cards} // Use the cards prop here
      renderItem={renderItem}
      renderHiddenItem={renderHiddenItem}
      rightOpenValue={-100}
      leftOpenValue={100}
    />
  );
};

export default SwipeableCardList;
