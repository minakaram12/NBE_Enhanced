import { StyleSheet } from "react-native";
import { theme } from "../../../theme/theme";
export default StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      //backgroung of menuContent
      backgroundColor: theme?.BackgroundMenu,
    },
    outerAnimated:{
        flexGrow: 1,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        overflow: 'hidden',
    },
    innerAnimated:{
         //background of top nav bar
         backgroundColor: theme.BackgroundMenu,
         height: '100%',
    },
    blurView: {
      ...StyleSheet.absoluteFillObject,
    },

  });