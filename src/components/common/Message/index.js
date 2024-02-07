import { View, Text } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import colors from '../../../assets/theme/colors'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Message = ({ message, onDismiss, retry, retryFn, primary, danger, info, succes, ...props }) => {

    const [userDismiss, setUserDismiss] = useState(false);
    const getBackgoundColor = () => {
        if (primary) return colors.primary;
        if (succes) return colors.success;
        if (danger) return colors.danger;
        if (info) return colors.info;
    }

    return (
        !userDismiss &&
        <TouchableOpacity
            style={[styles.wrapper, { backgroundColor: getBackgoundColor() }]}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: "white" }}>{message}</Text>
                {
                    retry && !typeof onDismiss === 'function' &&
                    <TouchableOpacity onPress={retryFn}>
                        <Text style={{ color: "white" }}> Retry</Text>
                    </TouchableOpacity>
                }
                {
                    typeof onDismiss === 'function' &&
                    <TouchableOpacity
                        onPress={() => {
                            setUserDismiss(true);
                            onDismiss();
                        }}
                    >
                        <Text style={{ color: "white" }}>X</Text>
                    </TouchableOpacity>
                }

            </View>
        </TouchableOpacity>

    )
}

export default Message