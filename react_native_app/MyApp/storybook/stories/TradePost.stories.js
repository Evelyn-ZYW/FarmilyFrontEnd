import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import TradePost from '../../comps/TradePost';
import CenterView from './CenterView';

storiesOf('Trade Post', module)

//below is a decoration to make all comps appear in the center
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)

  .add('My Trade Post', () => (
    <TradePost />
  ));