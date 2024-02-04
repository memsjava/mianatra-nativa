import React, { useState } from "react";
import Container from "../../components/Container";
import Input from "../../components/Input";
import styles from "../../components/Input/styles";
import { Text } from "react-native";

const Login = () => {
    const [text, onChangeText] = useState('Useless Text');
    return (
        <Container>
            <Input
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                label="Username"
                iconPosition="right"
                error='errorrrr'
            />
            <Input
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                label="Password"
                icon={<Text>SHOW</Text>}
                iconPosition="right"
            />
        </Container>
    )
};

export default Login;