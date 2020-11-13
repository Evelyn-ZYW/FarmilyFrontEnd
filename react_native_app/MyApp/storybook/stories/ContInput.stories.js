import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import Comment from '../../comps/Comment';
import CenterView from './CenterView';
import ContInput from '../../comps/ContInput';

storiesOf('ContInput', module)

//below is a decoration to make all comps appear in the center
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)

  .add('My ContInput', () => (
    <ContInput />
  ));