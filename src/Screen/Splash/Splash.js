import React, { useEffect } from 'react';
import { Image, View ,Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SplashIMG from '../../Assets/SplashGIF/Spotify_App_Logo.svg.png'

const Splash = () => {
    const navigation = useNavigation();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('Login');
        }, 1000);

        // Clear the timer when the component unmounts
        return () => clearTimeout(timer);
    }, []);

    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#000', height: '100%' ,flexDirection:'column',columnGap:10}}>
           <Image  source={SplashIMG} style={{height:150,width:150}}/>
           <Text style={{fontWeight:'bold',fontSize:50,color:'#FFF'}}>Spotify</Text>
        </View>
    );
}

export default Splash;
