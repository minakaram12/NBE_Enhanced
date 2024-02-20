import {Pressable, StyleSheet, View, Image} from 'react-native';
import {layouts} from '../../../constants/styles';
import { useState } from 'react';
import { Svg } from 'react-native-svg';
import ColViewSvg from '../../../assets/svgs/ColViewSvg';
import RowView from '../../../assets/svgs/RowViewSvg';

interface TogglerProps {
  activeColor?: string;
  inActiveColor?: string;
  backgroundColor?: string;
}
function Toggler({
  activeColor = '#007236',
  inActiveColor = '#B7B7B7',
  backgroundColor = '#ffffff',
}: TogglerProps) {
    const [colView,setColView] = useState(true);
    const toggleView = ()=>{
        setColView((prevState)=>{return !prevState})
    }
  return (
    <View style={[styles.container,layouts.yCentered,layouts.xCentered]}>
      <Pressable style={[styles.container,layouts.row,{backgroundColor:backgroundColor},layouts.justifyBetween]} onPress={toggleView}>
        <View style={[layouts.yCentered,layouts.xCentered,{ backgroundColor: colView ? backgroundColor : activeColor },styles.iconStyle]}>
          <ColViewSvg color={colView?inActiveColor:'white'}/>
        </View>
        <View style={ [layouts.yCentered,layouts.xCentered,{ backgroundColor: !colView ? backgroundColor : activeColor },styles.iconStyle]}>
          <RowView color={colView ? "white" : inActiveColor}/>
        </View>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  iconStyle: 
  {
    width: 24,
     height: 24,
     borderRadius: 12,
},
container:{
    width:61,
    borderRadius:15,
}
});

export default Toggler;
