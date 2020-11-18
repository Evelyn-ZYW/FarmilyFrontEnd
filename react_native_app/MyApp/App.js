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
import { NavigationContainer } from '@react-navigation/native';

import AuthNavigator from './AuthNavigation/AuthNavigator';


// return <View style={styles.container}>
    
    {/* <ForumBoard /> */}
    {/* <MessageMain />  */}
     {/* <MpBoard />  */}
     {/* <ShMain />  */}
     {/* <ShFilter />  */}
     {/* <PopUp />  */}
     {/* <Main1 />  */}
     {/* <Main2 />  */}
     {/* <Profile/>  */}
    {/*<ShBusines/>*/}
     {/* <Favorite/>  */}
      {/* <ComfirmInfo />  */}
     {/* <Notification/> */}
     {/*<OneDiscussion /> */}
    {/* <MpDiscussion /> */}
    {/* <PostDiscussion /> */}
    {/* <Home /> */}
    {/* <Login />  */}
    {/* <SignUp />  */}
    {/* <ForgetP /> */}  
     {/* <ResetP /> */}
    //  </View>

const App = () => {
  return <NavigationContainer>
    <AuthNavigator/>
     </NavigationContainer>

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
