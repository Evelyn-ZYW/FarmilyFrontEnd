import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import DiscussionHeading from '../../comps/DiscussionHeading';
import CenterView from './CenterView';

storiesOf('Discussion Heading', module)

//below is a decoration to make all comps appear in the center
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)

  .add('My Discussion Heading', () => (
    <DiscussionHeading />
  ));