import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import Outlined from '../../comps/Outlined';
import CenterView from './CenterView';

storiesOf('Outlined Button', module)

//below is a decoration to make all comps appear in the center
  //.addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)

  .add('Red Meat', () => (
    <Outlined text="Red Meat"/>
  ));