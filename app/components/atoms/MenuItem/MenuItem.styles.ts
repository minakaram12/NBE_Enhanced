import { StyleSheet } from "react-native";
import{theme} from '../../../theme/theme'

export default StyleSheet.create({
    itemContainer: {
        flexDirection:'row',
        borderRadius: 16,
        padding:5,
        textAlign: 'center',
        fontFamily: 'Roboto-Bold',
        alignItems:"center"
    },
    text:{
        fontSize:18,
        color:theme?.itemColor,
        fontWeight:'600',
        
    },
    iconContainer: {
        borderRadius: 16,
        padding: 16,
        margin:6,
        backgroundColor:theme?.greylighter,
        width:40, 
        height: 40
    },
    hoveredItem: {
        backgroundColor: theme?.DarkSpringGreen,
      },
});