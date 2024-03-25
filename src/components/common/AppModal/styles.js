import { StyleSheet } from "react-native";
import colors from "../../../assets/theme/colors";

export default StyleSheet.create(
    {
        wrapper: {
            backgroundColor: 'rgba(0,0,0,0.6)',
            flex: 1
        },
        modalView: {
            backgroundColor: colors.white,
            minHeight: 300,
            marginHorizontal: 20,
            borderRadius: 4
        },
        header: {
            flexDirection: 'row',
            padding: 15,
            alignItems: 'center',
            width: '100%',
            justifyContent: 'space-between'
        },
        title: {
            fontSize: 21,
        }
    }
)