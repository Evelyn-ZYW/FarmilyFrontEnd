import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import PostBodyD from "../../comps/PostBodyD";
import CenterView from './CenterView';

storiesOf('My PostBodyD', module)

//below is a decoration to make all comps appear in the center
  //.addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)

  .add('My PostBodyD', () => (
    <PostBodyD />
  ))