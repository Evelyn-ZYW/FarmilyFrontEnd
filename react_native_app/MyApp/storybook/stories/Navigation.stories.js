import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import Navigation from '../../comps/Navigation';
import CenterView from './CenterView';

storiesOf('Navigation', module)

//below is a decoration to make all comps appear in the center
  //.addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)

  .add('Navigation', () => (
    <Navigation/>
  ));