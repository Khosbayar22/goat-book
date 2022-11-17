import {Box, Button, Center, Text, View, IconButton} from "native-base";
import React from "react";

import Ionicons from "react-native-vector-icons/Ionicons";

function ContentCards({name, isShowPicture}) {
    return (
        <Center flex={1} justifyContent="center" alignItems="center">
            <Box rounded="lg" alignItems="center" justifyContent="center" borderColor="coolGray.200" borderWidth="3"
                 w="300" h="300" p={4} my={3}>
                <Text color="brand.700" fontWeight="bold" fontSize="6xl">
                    {name}
                </Text>
                {isShowPicture > 0 &&
                <Text color="brand.700" fontWeight="bold" fontSize="6xl">
                    {name}
                </Text>}
            </Box>
        </Center>
    )
}

export default ContentCards;