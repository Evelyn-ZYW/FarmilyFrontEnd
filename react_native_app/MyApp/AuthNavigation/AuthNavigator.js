import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import Home from '../pages/Home';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

const Stack = createStackNavigator();

const AuthNavigator = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={SignUp} />
		</Stack.Navigator>
	);
};

export default AuthNavigator;