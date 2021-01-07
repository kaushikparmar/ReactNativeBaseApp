/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler';
import React, { createContext } from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'mobx-react';
// import stores from './stores';
import { RootStore,RootStoreApp } from "./stores/RootStore";
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Login from "./component/Login";

export const Contex = createContext<RootStore>({} as RootStore)

const App = () => {
  console.log("this app")
  return (
  
    
    <NavigationContainer>
      <View>
        <Contex.Provider value={RootStoreApp}>
            <Login/>
        </Contex.Provider> 
        {/* <Provider {...stores}>
          <View>
            <Text>Hello Home</Text>
          </View>
        {/* </Provider> */}
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
