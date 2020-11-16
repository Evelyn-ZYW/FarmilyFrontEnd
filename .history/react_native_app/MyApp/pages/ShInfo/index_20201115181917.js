import React from 'react';
import { View, StyleSheet, ScrollView, TextInput, Image} from 'react-native';
import MapView from 'react-native-maps';



// import DiscussionHeading from '../../comps/DiscussionHeading';
import Header from '../../comps/Header';
import UserTextInput from '../../comps/Inputs';
import MapCont from '../../comps/MapCont';
import ShBusinessComp from '../../comps/ShBusinessComp';
import Navigation from '../../comps/Navigation';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    
    
    icon: {
        resizeMode: "contain",
        maxWidth: 25,
        maxHeight: 25,
        margin: 10
    },
    midcont:{
        marginTop:40,
        position: "absolute",
        top: "10%",
        alignItems: 'center',
        
        // maxHeight:"105%"
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
        minHeight: "15%",
    },
    Navi:{
        position:"absolute",
        top:698
    },
});

const ShInfo = () => {
    return (
        <View style={styles.container}>
            <Header
                text="Slaughterhouse"
                iconRight={require('../../public/more.png')}
                iconLeft={require('../../public/back.png')}
                bottomColor="#00AC64"
            />
            {/* <ScrollView style={styles.contentContainer}> */}
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
                        <MapView
                            initialRegion={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                            }}
                    />
                    </MapCont>

                    <View>
                        <ShBusinessComp />
                    </View>
                    
                </View>
            {/* </ScrollView> */}

            <View style={styles.Navi}><Navigation /></View>
        </View>
    );
};

export default ShInfo;