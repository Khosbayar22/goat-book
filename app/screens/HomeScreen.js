import React from "react";
import {Image} from "react-native";
import {View, Center, VStack, Heading, IconButton, Box, HStack, AspectRatio, Pressable, Text} from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";
import {useNavigation} from '@react-navigation/native'

function App() {
    const navigation = useNavigation();

    function navigateFlashCard() {
        navigation.navigate('FlashCards');
    }

    function navigateFindWords() {
        navigation.navigate('FindWords');
    }

    return (
        <View flex={1} h="100%" p="5" pt="8">
            <VStack space={4} flex={1}>
                <Heading color="gray.500" size="lg">Уншиж сурцгаая</Heading>
                <HStack space={4} flex={2}>
                    <Box flex={1}>
                        <Pressable onPress={navigateFlashCard} h="40" w="100%" justifyContent="center"
                                   alignItems="center">
                            {({
                                  isHovered,
                                  isFocused,
                                  isPressed
                              }) => {
                                return <Box h="40" w="100%" justifyContent="center" alignItems="center" rounded="lg"
                                            bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : "white"}>
                                    <Image source={require("../assets/category-1.png")}
                                           style={{height: 60, width: 60}}/>
                                </Box>
                            }}
                        </Pressable>
                    </Box>
                    <Box flex={1}>
                    <Pressable onPress={navigateFindWords} h="40" w="100%" justifyContent="center"
                               alignItems="center">
                        {({
                              isHovered,
                              isFocused,
                              isPressed
                          }) => {
                            return <Box h="40" w="100%" justifyContent="center" alignItems="center" rounded="lg"
                                        bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : "white"}>
                                <Image source={require("../assets/category-2.png")}
                                       style={{height: 60, width: 60}}/>
                            </Box>
                        }}
                    </Pressable>
                </Box>
                </HStack>
            </VStack>
        </View>
    )
}

export default App;