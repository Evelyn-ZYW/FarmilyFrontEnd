import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import Underlined from '../../comps/Underlined';
import CenterView from './CenterView';

storiesOf('Underlined Button', module)

//below is a decoration to make all comps appear in the center
  //.addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)

  .add('Market', () => (
    <Underlined text="Market"/>
  ));