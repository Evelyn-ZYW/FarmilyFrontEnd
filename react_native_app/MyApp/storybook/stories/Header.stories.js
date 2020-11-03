import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import Header from '../../comps/Header';
import CenterView from './CenterView';

storiesOf('Header', module)

//below is a decoration to make all comps appear in the center
  //.addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)

  .add('Discussion', () => (
    <Header text="Discussion" />
  ))
  .add('Market Place', () => (
    <Header text="Market Place" bottomColor="#00AC64" iconRight={require("../../comps/Navigation/favourite.png")}/>
  ))
  ;