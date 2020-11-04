import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import MyTab from "../../comps/Tabs";
import CenterView from './CenterView';

storiesOf('My Tab', module)

//below is a decoration to make all comps appear in the center
  //.addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)

  .add('My Custom Tab', () => (
    <MyTab/>
  ))