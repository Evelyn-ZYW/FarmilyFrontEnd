import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import MarketHeading from '../../comps/MarketHeading';
import CenterView from './CenterView';

storiesOf('Market Heading', module)

//below is a decoration to make all comps appear in the center
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)

  .add('My Market Heading', () => (
    <MarketHeading />
  ));