import React from 'react';
import {View, Image} from 'react-native';

export default class ImageGallery extends React.Component{
  render(){
    return(
      <View>
        <Image 
        source={{uri:'https://images.pexels.com/photos/771146/pexels-photo-771146.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}}
        style={{flex:1, height: undefined, width: undefined, resizeMode: 'contain'}}/>

        <Image 
        source={{uri:'https://images.pexels.com/photos/2255801/pexels-photo-2255801.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}}
        style={{flex:1, height: undefined, width: undefined, resizeMode: 'contain'}}/>

        <Image 
        source={{uri:'https://images.pexels.com/photos/2889440/pexels-photo-2889440.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}}
        style={{width: 300, height: 200, resizeMode: 'contain'}}/>

        <Image 
        source={{uri:'https://images.pexels.com/photos/2253359/pexels-photo-2253359.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}}
        style={{width: 300, height: 200, resizeMode: 'contain'}}/>
      </View>
    )
  }
}




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
