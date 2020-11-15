import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


const Tab = createBottomTabNavigator();

const AppNavigator = () => {
	return (
		<Tab.Navigator>
			<Tab.Screen name="Home" component={Home} options={{ title: "Home" }} />

			<Tab.Screen
				name="CreatePost"
				component={CreatePostNavigator}
				options={{ title: "Create Post" }}
			/>

			<Tab.Screen
				name="AllPost"
				component={PostNavigator}
				options={{ title: "All Post" }}
			/>

			<Tab.Screen
				name="Chat"
				component={ChatNavigator}
				options={{ title: "chat screen" }}
			/>

			<Tab.Screen
				name="AccountPage"
				component={AccountPage}
				options={{ title: "Account" }}
			/>
		</Tab.Navigator>
	);
};

export default AppNavigator;