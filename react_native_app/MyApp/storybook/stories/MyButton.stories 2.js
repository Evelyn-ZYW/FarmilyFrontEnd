import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import Button from '../../comps/Button';
import CenterView from './CenterView';



storiesOf('Custom Button', module)

//below is a decoration to make all comps appear in the center
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)

  .add('My Custom Button', () => (
    <Button />
  ))

  .add('My Custom Tab', () => (
    <MyTab />
  ))

  // .add('My Custom Tab2', () => (
  //   <MyTab2 />
  // ));