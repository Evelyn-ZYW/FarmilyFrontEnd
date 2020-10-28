import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import MsgBox from '../../comps/MsgBox';
import CenterView from './CenterView';

storiesOf('Msg Box', module)

//below is a decoration to make all comps appear in the center
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)

  .add('My Msg Box', () => (
    <MsgBox />
  ));