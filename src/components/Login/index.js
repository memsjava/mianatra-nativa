import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Container from '../common/Container';
import Input from '../common/Input';
import CustomButton from '../common/CustomButton';
import { Image } from 'react-native';
import styles from './styles';
import { REGISTER } from '../../constants/routeNames';
import { useNavigation } from '@react-navigation/core';
import Message from '../common/Message';

const LoginComponent = () => {
    const [text, onChangeText] = useState('');
    const { navigate } = useNavigation();

    return (
        <Container>

            <Image style={styles.logoImage} source={require('../../assets/images/logo.png')} />
            <View >
                <Text style={styles.title}>
                    Welcome man
                </Text>
                <Text style={styles.subtitle}>
                    Please log in here man!
                </Text>
                <Message retry
                    retryFn={() => { console.log('hello word') }}
                    onDismiss={() => {
                        console.log('dismiss')
                    }}
                    succes message={"message na hafatra"} />
                <View style={styles.loginForm}>
                    <Input
                        label="Username"
                        iconPosition="right"
                        placeholder="Enter username"
                    />
                    <Input
                        label="Password"
                        icon={<Text>SHOW</Text>}
                        iconPosition="right"
                        placeholder="********"
                        secureTextEntry={true}
                    />
                    <CustomButton
                        primary
                        title="Submit"
                    />
                    <View style={styles.createSection}>
                        <Text style={styles.infoText}>
                            Need new account?
                        </Text>
                        <TouchableOpacity onPress={() => { navigate(REGISTER) }}>
                            <Text style={styles.linkButton}>
                                Register
                            </Text>

                        </TouchableOpacity>
                    </View>
                </View>

            </View>



        </Container>
    )
}

export default LoginComponent;