import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./DrawerNavigator";
import AuthNavigator from "./AuthNavigator";
import { GlobalContext } from "../context/Provider";
import HomeNavigator from "./HomeNavigator";

const AppNavContainer = () => {

    const { authState: { isLoggedIn } } = useContext(GlobalContext);

    console.log(isLoggedIn)

    return (
        <NavigationContainer>
            {
                isLoggedIn ? <HomeNavigator /> : <AuthNavigator />
            }
        </NavigationContainer>
    );
};

export default AppNavContainer;