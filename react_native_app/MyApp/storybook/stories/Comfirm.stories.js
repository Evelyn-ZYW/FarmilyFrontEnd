import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import MyComfirm from '../../comps/Comfirm';
import CenterView from './CenterView';

storiesOf('My Comfirm', module)

//below is a decoration to make all comps appear in the center
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)

  .add('My Comfirm Heading', () => (
    <MyComfirm />
  ));