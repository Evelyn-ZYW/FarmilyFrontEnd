import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import Read from "../../comps/Read";
import CenterView from './CenterView';

storiesOf('My Read', module)

//below is a decoration to make all comps appear in the center
  //.addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)

  .add('My Read', () => (
    <Read />
  ))