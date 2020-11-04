import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import MyPopUp from '../../comps/Popups';
import CenterView from './CenterView';

storiesOf('Popups', module)

//below is a decoration to make all comps appear in the center
  //.addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)

  .add('My PopUp', () => (
    <MyPopUp/>
  ));