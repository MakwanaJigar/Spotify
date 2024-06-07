// Navigation.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from '../Login/Login';
import Home from '../Home/Home';
import Search from '../Search/Search';
import Library from '../Library/Library';
import Premium from '../Premium/Premium';


import store from '../../Component/redux/store';
import { Provider } from 'react-redux';


// BUTTOM TAB imgS

import HomeIMG from '../../Assets/ButtomTabIMG/home.png'
import SearchIMG from '../../Assets/ButtomTabIMG/search.png'
import BooksIMG from '../../Assets/ButtomTabIMG/book.png'
import PremiumIMG from '../../Assets/ButtomTabIMG/spotify.png'
import { Image } from 'react-native';
import Splash from '../Splash/Splash';
import SongPlay from '../../Component/PlaySong/SongPlay';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => (
    <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarStyle: {
                backgroundColor: 'black', 
            }

        }}
        tabBarOptions={{
            activeTintColor: 'green',
            inactiveTintColor: 'white',
            labelStyle: { fontSize: 12 },

        }}
    >
        <Tab.Screen name="Home" component={Home} options={{
            tabBarIcon: () => (
                <Image source={HomeIMG} style={{ height: 25, width: 25 }} />
            ),
        }} 
        />
        <Tab.Screen name="Search" component={Search} options={{
            tabBarIcon: () => (
                <Image source={SearchIMG} style={{ height: 25, width: 25 }} />
            ),
        }} />
        <Tab.Screen name="Library" component={Library} options={{
            tabBarIcon: () => (
                <Image source={BooksIMG} style={{ height: 25, width: 25 }} />
            ),
        }} />
        <Tab.Screen name="You" component={Premium} options={{
            tabBarIcon: () => (
                <Image source={PremiumIMG} style={{ height: 25, width: 25 }} />
            ),
        }} />
    </Tab.Navigator>

);



const Navigation = () => {
    return (
        <Provider store={store}>

        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Main" component={MainNavigator} />
                <Stack.Screen name="SongPlay" component={SongPlay} />

            </Stack.Navigator>
        </NavigationContainer>
        </Provider>
    );
}

const MainNavigator = () => (
    <TabNavigator />
);

export default Navigation;
