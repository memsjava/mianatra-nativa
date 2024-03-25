/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import type { PropsWithChildren } from 'react';
import GlobalProvider from './src/context/Provider';
import AppNavContainer from './src/navigations';


function App(): React.JSX.Element {


  return (
    <GlobalProvider>
      <AppNavContainer />
    </GlobalProvider>
  );
}



export default App;
