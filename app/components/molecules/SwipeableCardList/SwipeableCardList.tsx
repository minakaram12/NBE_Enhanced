import {useState} from 'react';
import {SwipeListView} from 'react-native-swipe-list-view';
import DetailedCard, {
  DetailedCardProps,
} from '../../atoms/DetailedCard/DetailedCard.component';
import {detailedCardPropsArray} from './SwipeableCardListFaker';
import {Pressable} from 'react-native';

//i am using a faker if there is no input
interface SwipeableCardListProps {
  data?: Array<DetailedCardProps>;
}

const SwipeableCardList: React.FC<SwipeableCardListProps> = () => {
  const [listData, setListData] = useState(detailedCardPropsArray);

  const renderItem = (data, rowMap)=>{
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
    )}



  return <SwipeListView data={listData} renderItem={renderItem} />;
};
export default SwipeableCardList;
