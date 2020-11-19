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

import ForgetP from '../pages/ForgetP';
import ResetP from '../pages/ResetP';

import ShInfo from '../pages/ShInfo';

import Favorite from '../pages/Favorite';
import Notification from '../pages/Notification';
import MpDiscussion from '../pages/MpDiscussion';
import PostDiscussion from '../pages/PostDiscussion';

import MessageMain from '../pages/MessageMain';
import ShFilter from '../pages/ShFilter'

//no use
// import Main1 from './pages/Main1';
// import Main2 from './pages/Main2';


const Stack = createStackNavigator();

const AuthNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={ShFilter} />
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

            <Stack.Screen name="ConfirmInfo" component={ComfirmInfo} />
            <Stack.Screen name="PopUp" component={PopUp} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="ShInfo" component={ShInfo} />
            <Stack.Screen name="Favorite" component={Favorite} />
            <Stack.Screen name="Notification" component={Notification} />
            <Stack.Screen name="MpDiscussion" component={MpDiscussion} />
            <Stack.Screen name="PostDiscussion" component={PostDiscussion} />

            <Stack.Screen name="MessageMain" component={MessageMain} />
            <Stack.Screen name="ShFilter" component={ShFilter} />


        </Stack.Navigator>
    );
};

export default AuthNavigator;