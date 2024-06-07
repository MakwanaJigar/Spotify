import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, KeyboardAvoidingViewComponent, SafeAreaView, Platform, ScrollView } from 'react-native';

import ShowEye from '../../Assets/LoginIMG/view.png'
import HideEye from '../../Assets/LoginIMG/hide.png'
import GoogleIMG from '../../Assets/LoginIMG/google.png'
import FacebookIMG from '../../Assets/LoginIMG/facebook.png'
import SpotifyLogo from '../../Assets/LoginIMG/spotify.png'
import Navigation from '../Navigations/Navigation';
import { useNavigation } from '@react-navigation/native';

const Login = () => {

    const navigation = useNavigation()

    const [isPassword, setIsPassword] = useState(true)

    const handleShowPW = () => {
        setIsPassword(!isPassword)
    }

    // ......GO TO HOME PAGE
    const goToHome = () => {
        navigation.navigate("Main")
    }

    return (

        <KeyboardAvoidingView enabled behavior={Platform.OS === 'ios' ? 'padding' : null}> 

        <ScrollView style={{width: "100%", height: '100%', backgroundColor: 'black'}}>

        <View style={{ width: "100%", height: '100%', backgroundColor: 'black', alignItems: 'center', justifyContent: 'center', rowGap: 20 }}>

            <Image source={SpotifyLogo} style={{ width: 70, height: 70, marginBottom: 20 }} />
            <Text style={{ color: 'white', fontSize: 40, fontWeight: 'bold' }}>Log in to Spotify</Text>

            {/* INPUT FIELDS FOR PASSWORD AND USERNAME  */}

            <View style={{ width: '90%', rowGap: 10 }}>

                <View style={{ width: '100%' }}>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>
                        Email or Username
                    </Text>
                    <TextInput placeholder='Enter Email or Username' style={{ color: 'white', fontWeight: 'bold', fontSize: 14, borderWidth: 1, borderRadius: 8, borderColor: 'white' }} />
                </View>

                <View style={{ width: '100%' }}>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>
                        Password
                    </Text>
                    <View style={{ width: '100%', flexDirection: 'row', borderWidth: 1, borderRadius: 8, borderColor: 'white', alignItems: 'center', justifyContent: 'space-between' }}>
                        <TextInput placeholder='Enter Password' secureTextEntry={isPassword} style={{ width: '90%', color: 'white', fontWeight: 'bold', fontSize: 14 }} />
                        <TouchableOpacity onPress={handleShowPW}>
                            {
                                isPassword ? <Image source={HideEye} style={{ height: 20, width: 20, marginRight: 10 }} />
                                    :
                                    <Image source={ShowEye} style={{ height: 20, width: 20, marginRight: 10 }} />
                            }

                        </TouchableOpacity>
                    </View>
                </View>

            </View>

            {/*  LOGIN BTN */}
            <TouchableOpacity style={{ backgroundColor: "#1fdf64", height: 55, width: '90%', borderRadius: 30, alignItems: 'center', justifyContent: 'center' }} onPress={goToHome}>
                <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>
                    Log In
                </Text>
            </TouchableOpacity>

            {/* FORGOT PASSWORD */}
            <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
                Forgot your Password
            </Text>

            {/*  GOOGLE BTN */}
            <TouchableOpacity style={{ borderColor: "#FFF", borderWidth: 1, height: 55, width: '90%', borderRadius: 30, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', columnGap: 40 }}>
                <Image source={GoogleIMG} style={{ height: 30, width: 30, marginRight: 5 }} />
                <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
                    Continue with Google
                </Text>
            </TouchableOpacity>

            {/*  FACEBOOK BTN */}
            <TouchableOpacity style={{ borderColor: "#FFF", borderWidth: 1, height: 55, width: '90%', borderRadius: 30, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', columnGap: 40 }}>
                <Image source={FacebookIMG} style={{ height: 30, width: 30, marginRight: 5 }} />
                <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
                    Continue with Facebook
                </Text>
            </TouchableOpacity>

            {/*  PHONE BTN */}
            <TouchableOpacity style={{ borderColor: "#FFF", borderWidth: 1, height: 55, width: '90%', borderRadius: 30, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', columnGap: 40 }}>
                <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
                    Continue with Phone number
                </Text>
            </TouchableOpacity>



        </View>

        </ScrollView>

        </KeyboardAvoidingView>
    );
}

export default Login;
