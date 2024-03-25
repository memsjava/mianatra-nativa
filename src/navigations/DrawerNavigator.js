import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeNavigator from "./HomeNavigator";
import { HOME_NAVIGATOR, REGISTER } from "../constants/routeNames";
import { View, Text } from 'react-native';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {

    // return <Drawer.Navigator>
    //     <Drawer.Screen name={HOME_NAVIGATOR} component={HomeNavigator}></Drawer.Screen>
    //     {/* <Drawer.Screen name={REGISTER} component={AuthNavigator}></Drawer.Screen> */}
    // </Drawer.Navigator>
    return (
        <Drawer.Navigator>
            {/* <Drawer.Screen name="Feed" component={Feed} /> */}
            <Drawer.Screen name={HOME_NAVIGATOR} component={Article} />
        </Drawer.Navigator>
    );
}
function Feed() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Feed Screen</Text>
        </View>
    );
}

function Article() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Article Screen</Text>
        </View>
    );
}

export default DrawerNavigator;
