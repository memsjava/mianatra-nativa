import { StyleSheet } from "react-native";
import colors from "../../../assets/theme/colors";

export default StyleSheet.create({
    wrapper: {
        height: 42,
        borderRadius: 10,
        paddingHorizontal: 5,
        paddingVertical: 5,
        marginTop: 4,
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    textInput: {
        flex: 1,
        width: '100%'
    },
    textInputContainer: {
        paddingVertical: 12
    },
    error: {
        color: colors.danger,
        paddingTop: 4,
        fontSize: 12
    },
    loaderSection: {
        flexDirection: "row"
    }
});