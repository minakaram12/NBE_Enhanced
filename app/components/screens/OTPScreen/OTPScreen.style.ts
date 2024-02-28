import { StyleSheet } from "react-native";
import { theme } from "../../../theme/theme";
const styles = StyleSheet.create({
    container: {
        padding: 10,
    },

    OuterContainer: {
        backgroundColor: theme?.BackgroundScreen,
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        flexGrow: 1,
        paddingVertical: 15
    },

    pinCodeContainer: {
        backgroundColor: '#FFFFFF',
        marginBottom: 10,
    },

    activePinCodeContainer: {
        borderColor: '#007236',
        borderWidth: 3,
    },

    pinCodeText: {
        color: '#1C2437',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
    },
    timerText: {
        color: theme?.textColor,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 17,
        marginBottom: 10,
    },

    infoText: {
        color: '#B7B7B7',
        fontFamily: 'Roboto',
        fontSize: 17,
        fontWeight: '500',
    },

    otpTitle: {
        fontSize: 25,
    }
});

export default styles;
