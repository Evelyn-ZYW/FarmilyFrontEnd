import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import ForumPost from '../../comps/ForumPost';
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 
const ForumBoard = () => {
  return (
    <View style={styles.container}>
      <ForumPost />
    </View>
  );
};
 
export default ForumBoard;