import { View, Text, TextInput } from 'react-native'
import React from 'react'
import styles from './styles'

const Input = ({ style, icon, iconPosition, onChangeText, value, label }) => {
    return (
        <View style={styles.textInputContainer}>
            {label && <Text>{label}</Text>}
            <View style={styles.wrapper}>
                <View>{icon && icon}</View>
                <TextInput
                    style={[styles.textInput, style]}
                    onChangeText={onChangeText}
                    value={value}

                />
            </View>

        </View>
    )
}

export default Input