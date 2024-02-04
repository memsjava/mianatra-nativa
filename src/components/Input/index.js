import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import colors from '../../assets/theme/colors'

const Input = ({ style, icon, iconPosition, onChangeText, value, label, error, ...props }) => {
    const [focused, setFocused] = useState(false)

    const getFlexDirection = () => {
        if (icon && iconPosition == 'right')
            return 'row-reverse';
        else if (icon && iconPosition == 'left')
            return 'row';
    }
    const getBorderColor = () => {
        if (focused) return colors.primary;
        if (error) return colors.danger;
        else {
            return colors.grey;
        }
    }

    return (
        <View style={styles.textInputContainer}>
            {label && <Text>{label}</Text>}
            <View style={[styles.wrapper, { alignItems: icon ? 'center' : 'baseline' }, { borderColor: getBorderColor(), flexDirection: getFlexDirection() }]}>
                <View>{icon && icon}</View>
                <TextInput
                    style={[styles.textInput, style]}
                    onChangeText={onChangeText}
                    value={value}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    {...props}
                />
            </View>
            {error && <Text style=
                {styles.error}>{error}</Text>}

        </View>
    )
}

export default Input