import React from 'react';
import {View, Text, Button} from 'react-native';

const MyButton = () => {
    //no <div> 
    return <View>
        <Text>Button to signup</Text>
        <Button 
        title="Sign up"
        color="#FABBAD"
        onPress={()=>{alert("Hi!");}}
        />
        </View>
}

export default MyButton;