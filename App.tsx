/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


import {
  Colors,

} from 'react-native/Libraries/NewAppScreen';
import GlobalProvider from './src/context/Provider';
import AppNavContainer from './src/navigations';



const App = () => {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <GlobalProvider>
      <AppNavContainer />
    </GlobalProvider>
    // <NavigationContainer>
    //   <SafeAreaView style={backgroundStyle}>
    //     <StatusBar
    //       barStyle={isDarkMode ? 'light-content' : 'dark-content'}
    //       backgroundColor={backgroundStyle.backgroundColor}
    //     />
    //     <Text>Hello world</Text>
    //   </SafeAreaView>
    // </NavigationContainer>
  );
}


export default App;
