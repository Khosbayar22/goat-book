import {View, Text, Heading, Button, IconButton, HStack, VStack} from "native-base";
import React, {useContext, useLayoutEffect} from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import {WordsContext} from "../../stores/words-context";
import {useNavigation} from "@react-navigation/native";

function FinishedCard() {
    // console.log(navigation)
    // useLayoutEffect(() => {
    //     navigation.setOptions({
    //         headerShown: false
    //     })
    // })
    const navigation = useNavigation();
    const wordsCtx = useContext(WordsContext);

    function resetGame() {
        wordsCtx.resetWords();
        navigation.goBack();
    }

    return (
        <View h="100%" w="100%" flex={1} justifyContent="center" alignItems="center" bg="brand.700">
            <VStack space={4} alignItems="center">
                <Heading color="white" size="lg">Баяр хүргэе 🎉</Heading>
                <HStack space={3} justifyContent="center">
                    <IconButton borderRadius="full" bg="gray.50" onPress={resetGame}
                                _icon={{
                                    as: Ionicons,
                                    color: "brand.700",
                                    name: "refresh-outline",
                                    size: "4xl"
                                }}/>
                    <IconButton borderRadius="full" bg="gray.50" onPress={resetGame}
                                _icon={{
                                    as: Ionicons,
                                    color: "brand.700",
                                    name: "arrow-forward",
                                    size: "4xl"
                                }}/>
                </HStack>
            </VStack>
        </View>
    )
}

export default FinishedCard;