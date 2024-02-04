import { StyleSheet } from "react-native";
import colors from "../../assets/theme/colors";

export default StyleSheet.create({
    wrapper: {
        height: 42,
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 5,
        marginTop: 4
    },
    textInput: {
        flex: 1,
    },
    textInputContainer: {
        paddingVertical: 12
    },
    error: {
        color: colors.danger,
        paddingTop: 4,
        fontSize: 12
    }
});