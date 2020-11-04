import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import InputTime from '../../comps/InputTime';
import CenterView from './CenterView';

storiesOf('Input Time', module)

//below is a decoration to make all comps appear in the center
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)

  .add('User Input Time', () => (
    <InputTime />
  ));