import { StyleSheet } from "react-native";
import colors from "../../assets/theme/colors";

export default StyleSheet.create({
    wrapper: {
        height: 42,
        borderColor: colors.primary,
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: "row",
        paddingHorizontal: 5
    },
    textInput: {
        flex: 1,
    },
    textInputContainer: {
        paddingVertical: 12
    }
});