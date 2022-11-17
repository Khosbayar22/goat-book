import {View, Center, VStack, Heading, IconButton, Box, HStack, AspectRatio} from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";
import React from "react";
import Image from "react-native-web/dist/vendor/react-native/Animated/components/AnimatedImage";

function navigateFlashCard() {

}
function App () {
    return (
        <View flex={1} h="100%" p="5" pt="8">
            <Heading mb="4" color="gray.500" size="lg">Уншиж сурцгаая</Heading>
            <VStack space={4} w="100%">
                <HStack space={3} flex={2}>
                    <Box h="40" flex={1}>
                        <AspectRatio w="100%" ratio={16 / 9}>
                            <Image source={{
                                uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
                            }} alt="image" />
                        </AspectRatio>
                    </Box>
                    <Center h="40" flex={1} bg="primary.500" rounded="md" shadow={3} />
                </HStack>
            </VStack>
        </View>
    )
}

export default App;