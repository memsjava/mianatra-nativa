import { View, Text } from 'react-native'
import React from 'react'
import AppModal from '../common/AppModal'
import CustomButton from '../common/CustomButton'

const ContactsComponent = ({ modalVisible, setModalVisible }) => {
    return (

        <View>
            <AppModal
                // modalFooter={<></>}
                modalBody={<View></View>}
                title={"Modal test"}
                modalVisible={modalVisible} setModalvisible={setModalVisible} />
            <CustomButton
                title={"modal open"}
                secondary
                onPress={() => {
                    setModalVisible(true)
                }
                }
            />
        </View>
    )
}

export default ContactsComponent