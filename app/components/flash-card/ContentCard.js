import {Box, Button, Center, Text, View, IconButton, Image} from "native-base";
import React from "react";

import Ionicons from "react-native-vector-icons/Ionicons";

function ContentCards({name, picture, isShowPicture}) {
    return (
        <Center flex={1} justifyContent="center" alignItems="center">
            <Box rounded="lg" alignItems="center" justifyContent="center" w="100%" h="400" p={4} my={3}>
                <Text color="brand.700" fontWeight="bold" fontSize="6xl">
                    {name}
                </Text>
                {
                    isShowPicture &&
                    <Center>
                        <Image source={{
                            uri: picture
                        }} alt="Alternate Text" size="2xl" />
                    </Center>
                }
            </Box>
        </Center>
    )
}

export default ContentCards;