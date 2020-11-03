/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View, StyleSheet } from 'react-native';

// import ForumBoard from './pages/ForumBoard';
import MessageMain from './pages/MessageMain';
// import MpBoard from './pages/MpBoard';

const styles = StyleSheet.create({
  container: {
     flex:1,
    //  backgroundColor:"red",
     justifyContent:"center",
     alignItems:"center"
  }
})


const App = () => {
  return <View style={styles.container}>
    {/* <ForumBoard /> */}
    <MessageMain />
    {/* <MpBoard /> */}

  </View>
}


export default App;
// export {default} from './storybook'; 
