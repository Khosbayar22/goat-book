import {View, Text, Heading} from "native-base";
import React from "react";

function FinishedCard() {
    return (
        <View h="100%" w="100%" flex={1} justifyContent="center" alignItems="center" bg="brand.700">
            <Heading color="white" size="lg">Баяр хүргэе</Heading>
        </View>
    )
}

export default FinishedCard;