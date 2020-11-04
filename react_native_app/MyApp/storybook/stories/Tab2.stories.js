import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import MyTab2 from "../../comps/Tab2";
import CenterView from './CenterView';

storiesOf('My Tab2', module)

//below is a decoration to make all comps appear in the center
  //.addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)

  .add('My Custom Tab2', () => (
    <MyTab2 />
  ))