import React from 'react';
import {View, Text, Button} from 'react-native';

const MyButton = () => {
    //no <div> 
    return <View>
        <Text>Just a sample button</Text>
        <Button 
        title="Random Button"
        color="gray"
        onPress={()=>{alert("Hi!");}}
        />
        </View>
}

export default MyButton;