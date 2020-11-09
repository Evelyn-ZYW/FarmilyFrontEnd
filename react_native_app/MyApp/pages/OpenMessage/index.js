import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingViewComponent,
  KeyboardAvoidingView,
  Image,
} from 'react-native';
import ChatBubble from '../../comps/Chat';

import Header from '../../comps/Header';
import Navigation from '../../comps/Navigation';

export default function OpenMessage() {
  const currentUser = 1;
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const dummy = [
    {user: 1, message: 'hi'},
    {user: 1, message: 'heelo'},
    {user: 1, message: 'are you there'},
    {user: 2, message: 'yes,but i dont want to reply you '},
    {user: 1, message: 'oh ok'},
  ];

  useEffect(() => {
    setMessages(dummy);
  }, []);

  const scrollView = useRef();
  const title = (
    <View style={styles.title}>
      <View style={{flexDirection: 'row', alignItems: 'center', flexGrow: 0.5}}>
        <Image
          style={styles.titleicon}
          source={require('../../public/tractor1.png')}
        />
        <Text style={{fontSize: 25}}>Title</Text>
      </View>
      <TouchableOpacity>
        <Image
          style={styles.icon}
          source={require('../../public/arrowRight.png')}
        />
      </TouchableOpacity>
    </View>
  );

  const chat = [...messages].map((message) =>
    message.user == currentUser ? (
      <View style={{alignItems: 'flex-end'}} key={messages.user}>
        <ChatBubble msg={message.message} background="#c97064" />
      </View>
    ) : (
      <View style={{alignItems: 'flex-start'}} key={messages.user}>
        <ChatBubble msg={message.message} background="#DEDEDE" />
      </View>
    ),
  );

  const send = (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        maxHeight: 35,
        marginTop: 5,
      }}>
      <TouchableOpacity>
        <Image
          style={styles.icon}
          source={require('../../public/PlusWithBlack.png')}
        />
      </TouchableOpacity>
      <TextInput
        multiline
        style={styles.textInput}
        placeholder="Aa"
        onChangeText={(text) => {
          setMessage(text);
        }}
        value={message}
      />
      <TouchableOpacity
        onPress={() => {
          setMessages([...messages, {user: currentUser, message: message}]);
        }}>
        <Image style={styles.send} source={require('../../public/send.png')} />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header
        text="Message"
        iconLeft="none"
        iconRight="none"
        bottomColor="#C97064"
      />
      <View style={styles.body}>
        {title}
        <View>
          <ScrollView
            style={{
              minWidth: '100%',
              height: 485,
              padding: 10,
            }}
            ref={scrollView}>
            {chat}
          </ScrollView>
          {send}
        </View>
      </View>
      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  body: {
    position: 'absolute',
    top: '9%',
    alignItems: 'center',
  },
  title: {
    minWidth: '100%',
    height: 80,
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  textInput: {
    width: 320,
    height: '100%',
    fontSize: 15,
    borderRadius: 18,
    paddingLeft: 15,
    borderColor: 'grey',
    borderWidth: 1,
  },
  titleicon: {resizeMode: 'contain', maxWidth: 50, maxHeight: 50, margin: 10},
  icon: {
    resizeMode: 'contain',
    maxWidth: 25,
    maxHeight: 25,
    margin: 10,
  },
  send: {
    resizeMode: 'contain',
    maxWidth: 35,
    maxHeight: 30,
    margin: 10,
  },
});
