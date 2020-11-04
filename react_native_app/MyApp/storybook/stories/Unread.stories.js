import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import MyUnread from "../../comps/Unread";
import CenterView from './CenterView';

storiesOf('My Unread', module)

//below is a decoration to make all comps appear in the center
  //.addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)

  .add('My Unread', () => (
    <MyUnread />
  ))