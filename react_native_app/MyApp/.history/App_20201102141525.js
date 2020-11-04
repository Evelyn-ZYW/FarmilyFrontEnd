/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View, StyleSheet } from 'react-native';
import Button from './comps/Button';
// import Avatar from './comps/Avatar';
// import InputDate from './comps/InputDate';
// import InputTime from './comps/InputTime';

const App = () => {
  return <View style={styles.container}>
    <Button />
  </View>

}

const styles = StyleSheet.create({
  container: {
     flex:1,
     backgroundColor:"red",
     justifyContent:"center",
     alignItems:"center"
  }
})
//export default App;
export {default} from './storybook'; 
