import React from "react";
import {Image, Animated, StyleSheet, Dimensions} from "react-native";
import {
    View,
    Center,
    VStack,
    Heading,
    IconButton,
    Box,
    HStack,
    AspectRatio,
    Pressable,
    Text,
    Button
} from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";
import {useNavigation} from '@react-navigation/native'
import {
    ParallaxSwiper,
    ParallaxSwiperPage,
} from 'react-native-parallax-swiper';

const {width, height} = Dimensions.get("window");

function App() {
    const navigation = useNavigation();
    const myAnimatedValue = new Animated.Value(0);

    function navigateFlashCard() {
        navigation.navigate("FlashCards");
    }

    function navigateFindWords() {
        navigation.navigate("FindWords");
    }

    return (
        <View flex={1} h="100%">
            <VStack space={4} flex={1}>
                <Heading p="5" pt="8" color="gray.500" size="lg">Уншиж сурцгаая</Heading>
                <View flex={2}>
                    <ParallaxSwiper
                        speed={0.75}
                        dividerWidth={0}
                        dividerColor="black"
                        animatedValue={myAnimatedValue}
                    >
                        <ParallaxSwiperPage
                            BackgroundComponent={
                                <View style={styles.backgroundImage}/>
                            }
                            ForegroundComponent={
                                <VStack flex={1} bg="gray.100" space={12}>
                                    <Box justifyContent="center" alignItems="center">
                                        <Box p={12} mb={2} justifyContent="center" alignItems="center" rounded="full" bg="orange.100">
                                            <Image source={require("../assets/category-1.png")} style={{height: 200, width: 200}}/>
                                        </Box>
                                        <Text fontSize="xl" fontWeight="bold" color="gray.600">
                                            Үг нүдлэх
                                        </Text>
                                    </Box>

                                    <Pressable>
                                        {({
                                              isHovered,
                                              isFocused,
                                              isPressed
                                          }) => {
                                            return (
                                                <Button borderWidth="3" borderColor="white" leftIcon={<Image source={require("../assets/go.png")} style={{height: 40, width: 40}}/>} onPress={navigateFlashCard} mx={5} key="lg" size="lg"
                                                        bg={isPressed ? "brand.800" : isHovered ? "brand.800" : "brand.700"}
                                                        rounded="full">
                                                    <Text color="white" fontSize="2xl" fontWeight="bold">
                                                        Тоглох
                                                    </Text>
                                                </Button>
                                            )
                                        }}
                                    </Pressable>
                                </VStack>
                            }
                        />
                        <ParallaxSwiperPage
                            BackgroundComponent={
                                <View style={styles.backgroundImage}/>
                            }
                            ForegroundComponent={
                                <VStack flex={1} bg="gray.100" space={12}>
                                    <Box justifyContent="center" alignItems="center">
                                        <Box p={12} mb={2} justifyContent="center" alignItems="center" rounded="full" bg="amber.100">
                                            <Image source={require("../assets/category-2.png")} style={{height: 200, width: 200}}/>
                                        </Box>
                                        <Text fontSize="xl" fontWeight="bold" color="gray.600">
                                            Цээж бичиг
                                        </Text>
                                    </Box>

                                    <Pressable>
                                        {({
                                              isHovered,
                                              isFocused,
                                              isPressed
                                          }) => {
                                            return (
                                                <Button borderWidth="3" borderColor="white" leftIcon={<Image source={require("../assets/go.png")} style={{height: 40, width: 40}}/>} onPress={navigateFindWords} mx={5} key="lg" size="lg"
                                                        bg={isPressed ? "brand.800" : isHovered ? "brand.800" : "brand.700"}
                                                        rounded="full">
                                                    <Text color="white" fontSize="2xl" fontWeight="bold">
                                                        Тоглох
                                                    </Text>
                                                </Button>
                                            )
                                        }}
                                    </Pressable>
                                </VStack>
                            }
                        />
                    </ParallaxSwiper>
                </View>
            </VStack>
        </View>
    )
}

export default App;

const styles = StyleSheet.create({
    backgroundImage: {
        width,
        height,
    },
});