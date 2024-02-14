import { StyleSheet } from "react-native";

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
        color:'#1B1B1B',
        fontWeight:'600',
        
    },
    iconContainer: {
        borderRadius: 16,
        padding: 16,
        margin:6,
        backgroundColor:'#e8e8e8',
        width:40, 
        height: 40
    }
});