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

import ForgetP from '../pages/ForgetP';
import ResetP from '../pages/ResetP';


const Stack = createStackNavigator();

const AuthNavigator = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={SignUp} />
            <Stack.Screen name="Main" component={UserMain} />
			      <Stack.Screen name="ForgetP" component={ForgetP} />
			      <Stack.Screen name="ResetP" component={ResetP} />

            <Stack.Screen name="Market" component={MpBoard} />
            <Stack.Screen name="OneMarket" component={OneMarket} />
            <Stack.Screen name="Discussion" component={ForumBoard} />
            <Stack.Screen name="OneDiscussion" component={OneDiscussion} />
            <Stack.Screen name="Sh" component={ShMain} />
            <Stack.Screen name="ShB" component={ShBusiness} />

		</Stack.Navigator>
	);
};

export default AuthNavigator;