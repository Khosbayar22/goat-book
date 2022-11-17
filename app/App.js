import React, {useCallback, useState} from "react";
import {Image} from "react-native";
import {StatusBar} from 'expo-status-bar';
import {NativeBaseProvider, extendTheme} from "native-base";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from "react-native-vector-icons/Ionicons";
import {useFonts} from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import FindWords from "./screens/FindWords";
import FlashCards from "./screens/FlashCards";
import Home from "./screens/HomeScreen"


const colorTheme = {
    brand: {
        800: "#FF2000",
        700: "#FF725E",
    },
};

const theme = extendTheme({
    colors: colorTheme,
    fontConfig: {
        Rubik: {
            200: {
                normal: "rubik-light",
                italic: "rubik-light-italic",
            },
            400: {
                normal: "rubik-regular",
            },
            500: {
                normal: "rubik-medium",
                italic: "rubik-medium-italic",
            },
            600: {
                normal: "rubik-semiBold",
                italic: "rubik-semiBold-italic",
            },
            700: {
                normal: "rubik-bold",
                italic: "rubik-bold-italic",
            },
        },
    },
    fonts: {
        heading: "Rubik",
        body: "Rubik",
        mono: "Rubik",
    },
});

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function AppOverview() {
    return (
        <BottomTabs.Navigator screenOptions={
            {
                headerStyle: {backgroundColor: colorTheme.brand["700"]},
                headerTintColor: "#fff",
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                headerTitleAlign: 'center',
                tabBarStyle: {},
                tabBarActiveTintColor: colorTheme.brand["700"],
                tabBarInactiveTintColor: '#d4d4d4'
            }
        }>
            <BottomTabs.Screen name="HomeScreen" component={Home} options={{
                initialRouteName: 'HomeScreen',
                tabBarShowLabel: false,
                title: "Goats",
                headerBackTitleStyle: {
                    backgroundColor: "#ddd"
                },
                tabBarIcon({color, size}) {
                    return (
                        <Ionicons name="home" color={color} size={size}/>
                    )
                }
            }}/>
        </BottomTabs.Navigator>
    );

}

export default function App() {
    const [fontsLoaded] = useFonts({
        'rubik-light': require('./assets/fonts/Rubik-Light.ttf'),
        'rubik-light-italic': require('./assets/fonts/Rubik-LightItalic.ttf'),
        'rubik-regular': require('./assets/fonts/Rubik-Regular.ttf'),
        'rubik-medium': require('./assets/fonts/Rubik-Medium.ttf'),
        'rubik-medium-italic': require('./assets/fonts/Rubik-MediumItalic.ttf'),
        'rubik-semiBold': require('./assets/fonts/Rubik-SemiBold.ttf'),
        'rubik-semiBold-italic': require('./assets/fonts/Rubik-SemiBoldItalic.ttf'),
        'rubik-bold': require('./assets/fonts/Rubik-Bold.ttf'),
        'rubik-bold-italic': require('./assets/fonts/Rubik-BoldItalic.ttf'),
    });

    useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <>
            <StatusBar style='light'/>
            <NativeBaseProvider theme={theme}>
                <NavigationContainer>
                    <Stack.Navigator screenOptions={
                        {
                            headerStyle: {backgroundColor: colorTheme.brand["700"]},
                            headerTintColor: "#fff",
                            headerTitleStyle: {
                                fontWeight: 'bold',
                            },
                            headerTitleAlign: 'center',
                            tabBarStyle: {},
                            tabBarActiveTintColor: colorTheme.brand["700"],
                            tabBarInactiveTintColor: '#d4d4d4'
                        }}>
                        <Stack.Screen name="AppOverviewTabs" component={AppOverview} options={{
                            headerShown: false
                        }}/>
                        <Stack.Screen name="FlashCards" component={FlashCards} options={{
                            presentation: 'modal',
                            title: "Уншлага"
                        }}/>
                        <Stack.Screen name="FindWords" component={FindWords} options={{
                            presentation: 'modal',
                            title: "Цээж бичиг"
                        }}/>
                        <Stack.Screen name="HomeScreen" component={Home} options={{
                            title: "Goats"
                        }}/>
                    </Stack.Navigator>
                </NavigationContainer>
            </NativeBaseProvider>
        </>
    );
}