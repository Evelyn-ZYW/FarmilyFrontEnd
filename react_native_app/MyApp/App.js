/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";


import ForumBoard from './pages/ForumBoard';
import MessageMain from './pages/MessageMain';
import MpBoard from './pages/MpBoard';
import ShMain from './pages/ShMain';
import ShFilter from './pages/ShFilter';
import Main1 from './pages/Main1';
import Main2 from './pages/Main2';
import OneDiscussion from './pages/OneDiscussion';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

// Rauqel's pages
import ComfirmInfo from './pages/ComfirmInfo';
import PopUp from './pages/Popup';
import Profile from './pages/Profile';
import Favorite from './pages/Favorite';
import Notification from './pages/Notification';

import ForgetP from './pages/ForgetP';
import ResetP from './pages/ResetP';



const App = () => {
  return <View style={styles.container}>
    {/* <ForumBoard /> */}
    {/*<MessageMain /> */}
    {/* <MpBoard /> */}
    {/* <ShMain /> */}

    {/* <ShFilter /> */}
    {/* <PopUp /> */}
    {/* <Main1 /> */}
    {/* <Main2 /> */}

    {/* <Profile/> */}
    {/* <Favorite/> */}



    {/* <ComfirmInfo /> */}

    {/* <Notification/> */}

    <OneDiscussion />
    {/*<Home />*/}
    {/*<Login />*/}

    {/*<SignUp /> */}
    {/*<ForgetP />*/}
    {/* <ResetP /> */}
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //  marginTop:"10%",
    //  marginBottom:"5%",
    //  backgroundColor:"#DADADA",
    //  justifyContent:"center",
    //  alignItems:"center"
  }
})

export default App;
// export { default } from './storybook';
