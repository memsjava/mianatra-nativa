import { View, Text, TextInput, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import colors from '../../assets/theme/colors'
import { TouchableOpacity } from 'react-native-gesture-handler'

const CustomButton = ({ title, primary, secondary, danger, succes, disabled, loading, onPress, ...props }) => {
    const getBackgoundColor = () => {
        if (disabled) return colors.grey
        if (primary) return colors.primary;
        if (secondary) return colors.secondary;
        if (danger) return colors.danger;
        else {
            return colors.primary;
        }
    }

    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled}
            style={[styles.wrapper, { backgroundColor: getBackgoundColor() }]}>
            <View style={styles.loaderSection}>
                {
                    loading && <ActivityIndicator color={colors.accent} />
                }

                {
                    title && <Text style={{ color: disabled ? "black" : "white", paddingLeft: disabled ? 5 : 0 }}>{title}</Text>
                }

            </View>

        </TouchableOpacity>
    )
}

export default CustomButton