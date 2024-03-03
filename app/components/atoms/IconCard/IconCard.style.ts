import { StyleSheet } from "react-native";
import { theme } from "../../../theme/theme";

export default StyleSheet.create({
    defaultContainer: {
        borderRadius: 10,
        padding: 16,
        margin:6,
        backgroundColor:theme?.white,
        width:40, 
        height: 40,
        alignItems:"center",
        justifyContent:"center",
    },

    BackContainer: {
        borderRadius: 10,
        padding: 16,
        margin:6,
        backgroundColor:theme?.DarkSpringGreen,
        width:40, 
        height: 40,
        alignItems:"center",
        justifyContent:"center",
    },
    NotificationContainer: {
        borderRadius: 10,
        padding: 16,
        margin:6,
        backgroundColor:theme?.white,
        width:40, 
        height: 40,
        alignItems:"center",
        justifyContent:"center",
        elevation:10,
    },
    
});