import { View, Text, TouchableOpacity } from 'react-native'
import React, { } from 'react'
import Container from '../common/Container';
import Input from '../common/Input';
import CustomButton from '../common/CustomButton';
import { Image } from 'react-native';
import styles from './styles';
import { LOGIN } from '../../constants/routeNames';
import { useNavigation } from '@react-navigation/core';
import Message from '../common/Message';

const RegisterComponent = ({ onChange, onSubmit, form, errors, error, loading }) => {

    const { navigate } = useNavigation();

    return (
        <Container>

            <Image style={styles.logoImage} source={require('../../assets/images/logo.png')} />
            <View>
                <Text style={styles.title}>
                    Welcome man
                </Text>
                <Text style={styles.subtitle}>
                    Create a free account
                </Text>
                <View style={styles.loginForm}>
                    {console.log(error, form)}
                    {error?.error &&
                        <Message retry
                            retryFn={() => { console.log('hello word') }}
                            onDismiss={() => {
                                console.log('dismiss')
                            }}
                            danger message={error.error} />
                    }
                    <Input
                        label="Username"
                        iconPosition="right"
                        placeholder="Enter username"
                        onChangeText={(value) => onChange({ name: "userName", value })}
                        error={errors.userName || error?.username?.[0]}
                    />
                    <Input
                        label="First name"
                        iconPosition="right"
                        placeholder="Rabemampiandra"
                        onChangeText={(value) => onChange({ name: "firstName", value })}
                        error={errors.firstName || error?.first_name?.[0]}
                    />
                    <Input
                        label="Last name"
                        iconPosition="right"
                        placeholder="Eric"
                        onChangeText={(value) => onChange({ name: "lastName", value })}
                        error={errors.lastName || error?.last_name?.[0]}
                    />
                    <Input
                        label="Email"
                        iconPosition="right"
                        placeholder="memsjava@gmail.com"
                        onChangeText={(value) => onChange({ name: "email", value })}
                        error={errors.email || error?.email?.[0]}
                    />
                    <Input
                        label="Password"
                        icon={<Text>SHOW</Text>}
                        iconPosition="right"
                        placeholder="********"
                        secureTextEntry={true}
                        onChangeText={(value) => onChange({ name: "password", value })}
                        error={errors.password || error?.password?.[0]}
                    />
                    <CustomButton
                        primary
                        title="Submit"
                        onPress={onSubmit}
                        loading={loading}
                    />
                    <View style={styles.createSection}>
                        <Text style={styles.infoText}>
                            Already have account?
                        </Text>
                        <TouchableOpacity onPress={() => { navigate(LOGIN) }}>
                            <Text style={styles.linkButton}>
                                Sign in
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Container>
    )
}

export default RegisterComponent;