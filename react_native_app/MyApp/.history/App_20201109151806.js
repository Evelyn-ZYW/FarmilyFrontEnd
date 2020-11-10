/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

//import ForumBoard from './pages/ForumBoard';
import MessageMain from './pages/MessageMain';
// import MpBoard from './pages/MpBoard';
import ShMain from './pages/ShMain';


const App = () => {
  return <View style={styles.container}>
    {/*<ForumBoard />*/}
    {/*<MessageMain /> */}
    {/* <MpBoard /> */}
    {/* <ShMain /> */}
    <ShFilter />
  </View>
}

const styles = StyleSheet.create({
  container: {
     flex:1,
     marginTop:"10%",
     marginBottom:"5%",
    //  backgroundColor:"red",
    //  justifyContent:"center",
    //  alignItems:"center"
  }
})

export default App;
// export {default} from './storybook'; 
