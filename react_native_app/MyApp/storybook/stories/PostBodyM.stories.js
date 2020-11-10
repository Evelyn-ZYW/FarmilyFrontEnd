import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import PostBodyM from "../../comps/PostBodyM";
import CenterView from './CenterView';

storiesOf('My PostBodyM', module)

//below is a decoration to make all comps appear in the center
  //.addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)

  .add('My PostBodyM', () => (
    <PostBodyM />
  ))