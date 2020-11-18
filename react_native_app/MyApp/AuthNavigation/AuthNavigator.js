import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import Home from '../pages/Home';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import UserMain from '../pages/UserMain';
import MpBoard from '../pages/MpBoard';
import OneMarket from '../pages/OneMarket';
import ForumBoard from '../pages/ForumBoard';
import OneDiscussion from '../pages/OneDiscussion';
import ShMain from '../pages/ShMain';
import ShBusiness from '../pages/ShBusiness';
import ComfirmInfo from '../pages/ComfirmInfo';
import PopUp from '../pages/Popup';
import Profile from '../pages/Profile';

const Stack = createStackNavigator();

const AuthNavigator = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			 <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={SignUp} />
            <Stack.Screen name="Main" component={UserMain} />
            <Stack.Screen name="Market" component={MpBoard} />
            <Stack.Screen name="OneMarket" component={OneMarket} /> 
            <Stack.Screen name="Discussion" component={ForumBoard} />
             <Stack.Screen name="OneDiscussion" component={OneDiscussion} /> 
             <Stack.Screen name="Sh" component={ShMain} /> 
            <Stack.Screen name="ShB" component={ShBusiness} />
             <Stack.Screen name="ConfirmInfo" component={ComfirmInfo} /> 
            <Stack.Screen name="PopUp" component={PopUp} /> 
             <Stack.Screen name="Profile" component={Profile} /> 

		</Stack.Navigator>
	);
};

export default AuthNavigator;