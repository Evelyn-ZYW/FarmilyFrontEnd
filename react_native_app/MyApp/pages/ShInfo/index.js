import React from 'react';
import { View, StyleSheet, ScrollView, Image} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';


import Header from '../../comps/Header';
import UserTextInput from '../../comps/Inputs';
import MapCont from '../../comps/MapCont';
import ShBusinessComp from '../../comps/ShBusinessComp';
import Navigation from '../../comps/Navigation';

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: "center",
        backgroundColor: "#ffffff"
    },
    scroll: {
        maxHeight:"100%",
        width:"100%",
        marginTop: 70
    },    
    icon: {
        resizeMode: "contain",
        maxWidth: 25,
        maxHeight: 25,
        margin: 10
    },
    midcont:{
        display: "flex",
        marginTop: 50,
        alignItems: 'center',
        // justifyContent: "center"
    },
    continput:{
        width: 200,
        height: 200
    },
    userinput:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginBottom:10,        
        borderBottomColor:"#E5E5E5",
        borderBottomWidth:1.5,
        minWidth: "100%",
        minHeight: "12%",
    },
    Navi:{
        position:"absolute",
        bottom:0
    },
    mapContainer: {
        ...StyleSheet.absoluteFillObject,
        height: 400,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
      map: {
        ...StyleSheet.absoluteFillObject,
      },
});

const ShInfo = ({navigation}) => {
    const handleBack = () =>{
        navigation.navigate("Back")
    }
    // const handleSignup = () =>{
    //     navigation.navigate("Signup")
    // }

    return (
        <View style={styles.container}>
            <View>    
                <Header
                    text="Slaughterhouse"
                    iconRight={require('../../public/more.png')}
                    iconLeft={require('../../public/back.png')}
                    bottomColor="#2775C9"
                />
            </View>
            
            <View>
            <ScrollView style={styles.scroll}>
                <View style={styles.midcont}>                
                   <View style={styles.userinput}>
                        <UserTextInput
                        placeholder="Search"
                        />
                        <Image
                            source={require('../../public/search.png')}
                            style={styles.icon}
                        />
                    </View>

                    <MapCont style-={styles.continput} >
                        <View style={styles.mapContainer}>
                            <MapView
                            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                            style={styles.map}
                            region={{
                                latitude: 37.78825,
                                longitude: -122.4324,
                                latitudeDelta: 0.015,
                                longitudeDelta: 0.0121,
                            }}
                            >
                            </MapView>
                        </View>
                    </MapCont>                   
                </View>
                <View style-={styles.businessInfoComp}>
                    <ShBusinessComp />
                </View>
            </ScrollView> 
            </View>

            <View style={styles.Navi}><Navigation /></View>
        </View>
    );
};

export default ShInfo;