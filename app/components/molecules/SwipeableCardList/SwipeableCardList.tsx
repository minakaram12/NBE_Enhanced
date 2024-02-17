import {useState} from 'react';
import {SwipeListView} from 'react-native-swipe-list-view';
import DetailedCard, {
  DetailedCardProps,
} from '../../atoms/DetailedCard/DetailedCard.component';
import {detailedCardPropsArray} from './SwipeableCardListFaker';
import {Pressable} from 'react-native';
import HiddenItemWithActions from '../../atoms/hiddenItemWithActions/HiddenItemWithActions';

import {ExtendedCardProps} from './SwipeableCardListFaker';
//i am using a faker if there is no input
interface SwipeableCardListProps {
  data?: Array<ExtendedCardProps>;
}

const SwipeableCardList: React.FC<SwipeableCardListProps> = () => {
  const [listData, setListData] = useState(detailedCardPropsArray);

  const renderItem = (data, rowMap) => {
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
  const deleteRow = (rowMap, id) => {
    closeSpecificRow(rowMap, id);
    const newData = [...listData];
    const prevIndex = newData.findIndex(item => item.key === id);
    console.log('the index of the deleted item is ' + prevIndex);
    newData.splice(prevIndex, 1);
    setListData(newData);
  };
  const closeSpecificRow = (rowMap, id) => {
    if (rowMap[id]) {
      rowMap[id].closeRow();
    }
  };
  const editRow = (rowMap,id)=>{
    // do it latter
}
  return (
    <SwipeListView
      data={listData}
      renderItem={renderItem}
      renderHiddenItem={renderHiddenItem}
      rightOpenValue={-100}
      leftOpenValue={100}
    />
  );
};
export default SwipeableCardList;
