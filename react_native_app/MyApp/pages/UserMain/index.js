import React, { useState, useEffect } from 'react';
import { View, Image, ScrollView, StyleSheet, Text } from 'react-native';

import { TouchableOpacity } from 'react-native-gesture-handler';

import ForumPost from '../../comps/ForumPost';
import LogoHeader from '../../comps/LogoHeader';
import Navigation from '../../comps/Navigation';
import TradePost from '../../comps/TradePost';
import Underlined from '../../comps/Underlined';
import FilterButton from '../../comps/FilterButton';
import Button from '../../comps/Button';
import style from '../../storybook/stories/CenterView/style';

const Allpost = [
  {
    image: require('../../public/sh2.png'),
    title: 'OMG',
    description: 'Wow',
    type: 'discussion',
  },
  {
    image: require('../../public/sh2.png'),
    title: 'yes it is',
    description: 'Wow',
    type: 'discussion',
  },
  {
    image: require('../../public/sh3.png'),
    title: 'kkk',
    description: 'chicken',
    type: 'discussion',
  },
  {
    image: require('../../public/sh3.png'),
    title: 'okok',
    description: 'something else',
    type: 'discussion',
  },
  {
    image: require('../../public/tractor1.png'),
    title: 'item 2 for sale',
    price: 300,
    description: 'its me again',
    type: 'market',
  },
  {
    image: require('../../public/tractor2.png'),
    title: 'item 3 for sale',
    price: 700,
    description: 'OMG',
    type: 'market',
  },
  {
    image: require('../../public/tractor2.png'),
    title: 'item 4 for sale',
    price: 700,
    description: 'OMG',
    type: 'market',
  },
  {
    image: require('../../public/tractor2.png'),
    title: 'item 5 for sale',
    price: 700,
    description: 'OMG',
    type: 'market',
  },
];


const filterPost = {
  Discussion: (post) => post.type === 'discussion',
  Market: (post) => post.type === 'market',
};

const postType = Object.keys(filterPost);

export default function UserMain({ navigation }) {
  //no use for now
  const [isReady, setReady] = useState(false);

  const [post, setPost] = useState([]); //empty array for re-render

  // initial state is Discussion
  const [filter, setFilter] = useState('Discussion');
  const [currentSelection, setCurrentSelection] = useState('Discussion');

  useEffect(() => {
    setPost([...Allpost]);
  }, [setPost]);

  const filterButton = postType.map((type) => {
    return <FilterButton 
    style={setCurrentSelection == 'discussion'?styles.underline1: styles.underline2}
    key={type} text={type} type={type} setFilter={setFilter} setCurrentSelection={setCurrentSelection} />
  });


  const handleDiss = () => {
    navigation.navigate("Discussion");
  }
  const handleMark = () => {
    navigation.navigate("Market");
  }
  const handleSh = () => {
    navigation.navigate("Sh");
  }

  const postGroup = post
    .filter((type) => filterPost[filter](type))
    .map((post) => {
      if (post.type === 'discussion') {
        return (
          <ForumPost
            maxheight={100}
            imagePath={post.image}
            txt1={post.title}
            txt2={post.description}
            txt3={null}
            txt4={null}
            txt5={null}
            icon1={null}
            icon2={null}
            icon3={null}
            icon4={null}
          />
        );
      } else {
        return (
          <TradePost
            maxheight={100}
            imagePath={post.image}
            txt1={post.title}
            txt2={null}
            txt3={post.description}
            txt4={null}
            txt5={null}
            icon1={null}
            icon2={null}
            icon3={null}
            icon4={null}
          />
        );
      }
    });

  return (
    <View style={styles.container}>
      <LogoHeader logo={require("../../public/logo_h.png")} />
      <View style={styles.body}>
        <View style={styles.filterGroup}>{filterButton}</View>
        <ScrollView style={filter == "Discussion" ? styles.allPostBody : styles.allPostBody2}>{postGroup}</ScrollView>
        {filter == "Discussion" ? <Button text="MORE" bgcolor="#FDB833" width="70%" handler={handleDiss} /> : <Button text="MORE" bgcolor="#00AC64" width="70%" handler={handleMark} />}
        <View style={{ minWidth: '100%', alignItems: 'center', flexDirection: 'row' }}>
          <TouchableOpacity onPress={handleSh} >
            <Underlined
              text="Slaughterhouses"
            />
          </TouchableOpacity>


          <Image
            style={styles.icon}
            source={require("../../public/forward.png")}
          />
        </View>
      </View>
      <View style={styles.Navi}><Navigation /></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    position: 'absolute',
    top: 0,
    height: 100,
    minWidth: '100%',
    borderColor: 'lightgrey',
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    position: 'absolute',
    top: '20%',
    alignItems: 'center',

    // borderWidth: 1,
  },
  filterGroup: {
    minWidth: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  allPostBody: {
    marginTop: 20,
    borderColor: "#FDB833",
    borderWidth: 3,
    width: '90%',
    borderRadius: 10,
    height: 400,
  },

  allPostBody2: {
    marginTop: 20,
    borderColor: "#00AC64",
    borderWidth: 3,
    width: '90%',
    borderRadius: 10,
    height: 400,
  },
  icon: {
    resizeMode: 'contain',
    maxWidth: 25,
    maxHeight: 25,
    marginLeft: "-5%"
  },
  Navi: {
    position: "absolute",
    bottom: 0 
  },
  useMainB: {
    width: 212
  },
  underline1: {
    borderBottomColor: "#FDB833",
    borderBottomWidth: 3,
  },
  underline2: {
    borderBottomColor: "#00AC64",
    borderBottomWidth: 3,
  },
  underline3: {
    borderBottomColor: "blue",
    borderBottomWidth: 3,
  }
});
