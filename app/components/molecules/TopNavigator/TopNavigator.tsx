import {View, TouchableOpacity} from 'react-native';

interface TopNavProps {
  onPressLeft?: () => void;
  onPressMiddle?: () => void;
  onPressRight?: () => void;
  contentLeft?: any;
  contentMiddle?: any;
  contentRight?: any;
  routeName?:string;
}

const TopNavigator: React.FC<TopNavProps> = ({
  onPressLeft,
  onPressMiddle,
  onPressRight,
  contentLeft,
  contentMiddle,
  contentRight,
  routeName,
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 25,
        paddingHorizontal: 5,
        paddingVertical:10,
        height: 30,
        position:routeName==="Screen4"?"absolute":"relative",
        zIndex:routeName==="Screen4"?1:0,
        width:"100%",
      
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity onPress={onPressLeft}>
          {contentLeft}
        </TouchableOpacity>
        {contentMiddle && (
          <TouchableOpacity onPress={onPressMiddle}>
            {contentMiddle}
          </TouchableOpacity>
        )}
      </View>
      <TouchableOpacity onPress={onPressRight}>
        {contentRight}
      </TouchableOpacity>
    </View>
  );
};

export default TopNavigator;
