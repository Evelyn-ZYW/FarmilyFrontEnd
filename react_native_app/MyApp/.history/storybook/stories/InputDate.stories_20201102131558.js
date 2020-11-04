import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import InputDate from '../../comps/InputDate';
import CenterView from './CenterView';

storiesOf('Input Date', module)

//below is a decoration to make all comps appear in the center
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)

  .add('User Input Date', () => (
    <InputDate />
  ));