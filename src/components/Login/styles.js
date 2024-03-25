import { StyleSheet } from "react-native";
import colors from "../../assets/theme/colors";
import { ScaledSheet } from 'react-native-size-matters';


export default ScaledSheet.create({
    logoImage: {
        height: 140,
        width: 140,
        alignSelf: 'center',
        marginTop: 48
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        paddingTop: 16,
        fontWeight: '500'
    },
    subtitle: {
        fontSize: 18,
        textAlign: 'center',
        paddingVertical: 16,
        fontWeight: '500'
    },
    loginForm: {
        paddingTop: 16
    },
    createSection: {
        flexDirection: 'row'
    },
    linkButton: {
        paddingLeft: 8,
        color: colors.primary,
        fontSize: 16
    },
    infoText: {
        fontSize: 18
    }

});