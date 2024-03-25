import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import Container from "../../components/common/Container";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import ContactsComponent from "../../components/ContactsComponent";

const Contacts = () => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <Container style={{ paddin: 100 }}>
            <ContactsComponent modalVisible={modalVisible} setModalVisible={setModalVisible} />
        </Container>
    )
}
export default Contacts;