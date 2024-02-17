import { useState } from "react";
import { SwipeListView } from "react-native-swipe-list-view"
import { DetailedCardProps } from "../../atoms/DetailedCard/DetailedCard.component";

interface SwipeableCardListProps {
    data:Array<Object>
}

const SwipeableCardList: React.FC<SwipeableCardListProps> = ({data}) => {
    const [listData,setListData] = useState([]);
  return (<SwipeListView data={} renderItem={} renderHiddenItem={} />);
};
