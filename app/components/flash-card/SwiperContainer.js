import {useState} from 'react';
import {Box, Center, IconButton, Text, View} from "native-base";
import SwipeCards from "react-native-swipe-cards-deck"

import ContentCard from "./ContentCard";
import FinishedCard from "./FinishedCard";
import Ionicons from "react-native-vector-icons/Ionicons";
import React from "react";
import {useRoute} from "@react-navigation/native";

function SwiperContainer({words, hideHeader}) {
    const [isShowPicture, setShowPicture] = useState(false)
    const [isFinished, setFinished] = useState(false);
    const route = useRoute();
    const swipeCardRef = React.createRef();

    let showIconButton;

    if (route.name === 'FlashCards' && !isFinished) {
        showIconButton = <Center flex="1">
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
    }

    const handlePicture = () => {
        setShowPicture(!isShowPicture)
    }
    const swipeRight = () => {
        swipeCardRef.current._forceRightSwipe()
    }
    const closePicture = () => {
        setShowPicture(false)
    }
    return (
        <View flex="1">
            <View flex="8">
                <SwipeCards
                    cards={words}
                    loop={false}
                    ref={swipeCardRef}
                    keyExtractor={(contentData) => String(contentData.text)}
                    renderCard={(contentData) => <ContentCard name={contentData.text} picture={contentData.picture}
                                                              isShowPicture={isShowPicture}
                                                              closePicture={closePicture}
                                                              swipeRight={swipeRight}
                    />}
                    renderNoMoreCards={() => {
                        setFinished(true);
                        hideHeader();
                        return (
                            <FinishedCard/>
                        )
                    }}
                    showYup={false}
                    showNope={false}
                    actions={{
                        yup: {show: false},
                        nope: {show: false},
                        maybe: {show: false},
                    }}
                />
            </View>
            {
                showIconButton
            }

        </View>
    )
}

export default SwiperContainer;