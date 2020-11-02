import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import ForumPost from '../../comps/ForumPost';
import CenterView from './CenterView';

storiesOf('Forum Post', module)

//below is a decoration to make all comps appear in the center
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)

  .add('My Forum Post', () => (
    <ForumPost />
  ));