import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import Home from '../pages/Home';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import UserMain from '../pages/UserMain';
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
		</Stack.Navigator>
	);
};

export default AuthNavigator;