import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import Inputs from '../../comps/Inputs';
import CenterView from './CenterView';

storiesOf('Inputs', module)

//below is a decoration to make all comps appear in the center
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)

  .add('My Inputs', () => (
    <Inputs />
  ));