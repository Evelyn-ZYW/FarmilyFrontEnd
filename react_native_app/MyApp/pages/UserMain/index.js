import React, { useState, useEffect } from 'react';
import { View, Image, ScrollView, StyleSheet } from 'react-native';
import ForumPost from '../../comps/ForumPost';
import LogoHeader from '../../comps/LogoHeader';
import Navigation from '../../comps/Navigation';
import TradePost from '../../comps/TradePost';
import Underlined from '../../comps/Underlined';
import FilterButton from '../../comps/FilterButton';
import Button from '../../comps/Button';

const Allpost = [
  {
    image: require('../../public/sh2.png'),
    title: 'OMG',
    description: 'Wow',
    type: 'discussion',
    width: 3,
  },
  {
    image: require('../../public/sh2.png'),
    title: 'OMG',
    description: 'Wow',
    type: 'discussion',
    width: 3,
  },
  {
    image: require('../../public/sh3.png'),
    title: 'kkk',
    description: 'chicken',
    type: 'discussion',
    width: 3,
  },
  {
    image: require('../../public/tractor1.png'),
    title: 'item 2 for sale',
    price: 300,
    description: 'its me again',
    type: 'market',
    width: 3,
  },
  {
    image: require('../../public/tractor2.png'),
    title: 'item 3 for sale',
    price: 700,
    description: 'OMG',
    type: 'market',
    width: 3,
  },
  {
    image: require('../../public/tractor2.png'),
    title: 'item 3 for sale',
    price: 700,
    description: 'OMG',
    type: 'market',
    width: 3,
  },
];


const filterPost = {
  Discussion: (post) => post.type === 'discussion',
  Market: (post) => post.type === 'market',
};

const postType = Object.keys(filterPost);

export default function UserMain() {
  //no use for now
  const [isReady, setReady] = useState(false);


  const [post, setPost] = useState([]); //empty array for re-render

  const [filter, setFilter] = useState('Discussion'); // initial state is Discussion


  useEffect(() => {
    setPost([...Allpost]);
  }, [setPost]);

  // const heading = (
  //   <View style={styles.heading}>
  //     <Image source={require('../../public/logo.png')} />
  //   </View>
  // );

  // const FilterButton = ({ type, setFilter }) => {
  //   return <Button title={type} onPress={() => setFilter(type)} />;
  // };

  const filterButton = postType.map((type) => {

    return <FilterButton key={type} text={type} type={type} setFilter={setFilter} />

  });

  const postGroup = post
    .filter((type) => filterPost[filter](type))
    .map((post) => {
      if (post.type === 'discussion') {
        return (
          <TradePost
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
      } else {
        return (
          <TradePost
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
        <ScrollView style={styles.allPostBody}>{postGroup}</ScrollView>
        <Button text="MORE" />

        <View style={{ minWidth: '100%', alignItems: 'center', flexDirection: 'row' }}>
          <Underlined
            text="Slaughterhouses"
          // bottomWidth={null}
          />
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
    maxHeight: '50%',
  },
  icon: {
    resizeMode: 'contain',
    maxWidth: 25,
    maxHeight: 25,
    marginLeft: "-5%"
  },
  Navi:{
    position:"absolute",
    top:698
},
});
