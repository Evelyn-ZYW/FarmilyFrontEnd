import React from 'react';
import {View, Image, ScrollView, Dimensions, Text, StyleSheet} from 'react-native';
import style from '../../storybook/stories/CenterView/style';

const {width} = Dimensions.get("window");
const height = width * 0.5;

const images = [
  'https://images.pexels.com/photos/771146/pexels-photo-771146.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/2255801/pexels-photo-2255801.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/2889440/pexels-photo-2889440.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/2253359/pexels-photo-2253359.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
]

export default class ImageGallery extends React.Component{
  render(){
    return(
      <View style={galleryStyles.container}>
       <ScrollView 
       pagingEnabled 
       horizontal 
       showsHorizontalScrollIndicator={false}
       style={galleryStyles.scroll}>
          {
            images.map((image, index) => (
              <Image 
              key={index}
              source={{uri: image}}
              style={galleryStyles.image}/>
            ))
          }
        </ScrollView>

        <View style={galleryStyles.pagination}>
          <Text style={galleryStyles.pagingText}>⬤</Text>
        </View>
      </View>
    )
  }
}


const galleryStyles = StyleSheet.create({
  container: {width, height},
  scroll: {width, height},
  image: {width, height, resizeMode: 'contain'},
  pagination: {flexDirection: 'row', position: 'absolute', bottom: 0, alignSelf: 'center'},
  pagingText: {color: 'white', margin: 3}
})




// import React, {Component} from 'react';
// import {  StyleSheet,  Text,  View,  AppRegistry,} from 'react-native';
// import Carousel from 'react-native-carousel-view';


// export default class ImageGallery extends Component {
//   render() {
//     return (
//       <View style={{
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//       }}>
//         <View style={styles.container}>
//           <Carousel
//             width={300}
//             height={300}
//             onScroll={() => console.log('on scroll view')}
//             onScrollBegin={() => console.log('scroll begin')}
//             onPageChange={(page) => console.log('scroll change', page)}>
//             <View style={styles.contentContainer}>
//               <Text>Page 1</Text>
//             </View>
//             <View style={styles.contentContainer}>
//               <Text>Page 2</Text>
//             </View>
//             <View style={styles.contentContainer}>
//               <Text>Page 3</Text>
//             </View>
//           </Carousel>
//         </View>
//         <View style={styles.container}>
//           <Carousel
//             width={300}
//             height={300}
//             delay={2000}
//             indicatorAtBottom={false}
//             indicatorSize={20}
//             indicatorText="✽"
//             indicatorColor="red">
//             <View style={styles.contentContainer}>
//               <Text>Page 1</Text>
//             </View>
//             <View style={styles.contentContainer}>
//               <Text>Page 2</Text>
//             </View>
//             <View style={styles.contentContainer}>
//               <Text>Page 3</Text>
//             </View>
//           </Carousel>
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 0.5,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   contentContainer: {
//     borderWidth: 2,
//     borderColor: '#CCC',
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });


// AppRegistry.registerComponent('Image Gallery', () => ImageGallery);
