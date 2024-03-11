import React from 'react';
import {SwipeListView} from 'react-native-swipe-list-view';
import DetailedCard, {
  DetailedCardProps,
} from '../../atoms/DetailedCard/DetailedCard.component';
import {ListRenderItemInfo, Pressable, ViewStyle} from 'react-native';
import HiddenItemWithActions from '../../atoms/hiddenItemWithActions/HiddenItemWithActions';

import {Beneficiary} from './SwipeableCardListFaker';
import {Dispatch, SetStateAction} from 'react';
import {useNavigation} from '@react-navigation/native';

interface SwipeableCardListProps {
  cards: Array<Beneficiary>;
  cardsSetter: Dispatch<SetStateAction<Array<Beneficiary>>>;
}
export interface DetailedCardExtraProps extends DetailedCardProps {
  ViewStyle: ViewStyle;
  key: string;
}

export type RowMapType = {
  [key: string]: React.RefObject<any> | any;
};

const SwipeableCardList: React.FC<SwipeableCardListProps> = ({
  cards,
  cardsSetter,
}) => {
  const renderItem = (data: ListRenderItemInfo<DetailedCardExtraProps>) => {
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

  const renderHiddenItem = (
    data: ListRenderItemInfo<DetailedCardExtraProps>,
    rowMap: RowMapType,
  ) => {
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
  const deleteRow = (rowMap: RowMapType, id: string) => {
    closeSpecificRow(rowMap, id);
    const newData = [...cards];
    const prevIndex = newData.findIndex(item => item.key === id);
    newData.splice(prevIndex, 1);
    cardsSetter(newData);
  };

  const closeSpecificRow = (rowMap: RowMapType, id: string) => {
    if (rowMap[id]) {
      rowMap[id].closeRow();
    }
  };

  const editRow = (rowMap: RowMapType, id: string) => {
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
    });
  };

  return (
    <SwipeListView
      data={cards}
      renderItem={renderItem}
      renderHiddenItem={renderHiddenItem}
      rightOpenValue={-100}
      leftOpenValue={100}
    />
  );
};

export default SwipeableCardList;
