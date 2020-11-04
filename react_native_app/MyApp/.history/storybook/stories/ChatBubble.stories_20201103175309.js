import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import ChatBubble from '../../comps/Chat';
import CenterView from './CenterView';

storiesOf('Chat Bubble', module)

//below is a decoration to make all comps appear in the center
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)

  .add('Chat Bubble', () => (
    <ChatBubble />
  ));