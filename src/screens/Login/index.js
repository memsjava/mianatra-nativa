import React from "react";
import Container from "../../components/Container";
import Input from "../../components/Input";

const Login = () => {
    const [text, onChangeText] = React.useState('Useless Text');
    return (
        <Container>
            <Input
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                label="Username"
                iconPosition="right"
            />
            <Input
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                label="Password"
                icon={<Text>Eoooo</Text>}
                iconPosition="right"
            />
        </Container>
    )
};

export default Login;