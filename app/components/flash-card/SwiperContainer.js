import {Box, Center, IconButton, Text, View} from "native-base";
import SwipeCards from "react-native-swipe-cards-deck"

import ContentCard from "./ContentCard";
import FinishedCard from "./FinishedCard";
import Ionicons from "react-native-vector-icons/Ionicons";
import React from "react";

function SwiperContainer() {
    let isShowPicture = false;

    const CONTENTS = [
        {
            "text": "Морь",
            "picture": ""
        },
        {
            "text": "Тэмээ",
            "picture": ""
        },
        {
            "text": "Хонь",
            "picture": ""
        },
        {
            "text": "Ямаа",
            "picture": ""
        },
        {
            "text": "Үхэр",
            "picture": ""
        },
    ]

    const handlePicture = () => {
        isShowPicture = !isShowPicture;
    }
    return (
        <View flex="1">
            <View flex="8">
                <SwipeCards
                    cards={CONTENTS}
                    loop={false}
                    keyExtractor={(contentData) => String(contentData.text)}
                    renderCard={(contentData) => <ContentCard name={contentData.text} isShowPicture={isShowPicture}/>}
                    renderNoMoreCards={() => <FinishedCard/>}
                    showYup={false}
                    showNope={false}
                    // renderYup={}
                />
            </View>
            <Center flex="1">
                <IconButton borderRadius="full" onPress={() => handlePicture()} _icon={{
                    as: Ionicons,
                    color: "brand.700",
                    name: "eye",
                    size: "4xl",
                }} _hover={{
                    bg: "brand.700:alpha.20"
                }} _pressed={{
                    bg: "brand.700:alpha.20",
                    _icon: {
                        name: "eye-off"
                    },
                    _ios: {
                        _icon: {
                            size: "2xl"
                        }
                    }
                }} _ios={{
                    _icon: {
                        size: "2xl"
                    }
                }}/>
            </Center>
        </View>
    )
}

export default SwiperContainer;