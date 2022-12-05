import {Box, Button, Center, Text, View, IconButton, Image, Heading, VStack} from "native-base";
import React, {useState} from "react";

import Ionicons from "react-native-vector-icons/Ionicons";
import {useRoute} from "@react-navigation/native";
import {DraxList, DraxProvider, DraxView} from "react-native-drax";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {Dimensions, StyleSheet} from "react-native";

function ContentCards({name, picture, isShowPicture, closePicture, swipeRight}) {
    const route = useRoute();

    if (route.name === 'FindWords') {
        const data = name.split('');
        const vowels = ['а', 'э', 'и', 'о', 'ө', 'ү', 'у'];

        const [receivingItemList, setReceivedItemList] = useState(data);
        const [dragItemMiddleList, setDragItemListMiddle] = useState(vowels);
        const [isCorrectAnswer, setAnswer] = useState([]);
        const [isFinish, setFinish] = useState(false);

        const ReceivingZoneUIComponent = ({item, index}) => {
            return (
                <DraxView
                    receivingStyle={styles.receiving}
                    renderContent={({}) => {
                        if (isCorrectAnswer.includes(index)) {
                            return (
                                <Box my={2}>
                                    <Text color="brand.700" fontWeight="bold" fontSize="6xl">
                                        {item}
                                    </Text>
                                </Box>
                            );
                        }
                        return (
                            <Box m={2} h="90px" w="48px" rounded="md" bg="gray.400">
                            </Box>
                        );
                    }}
                    key={index}
                    onReceiveDragDrop={(event) => {
                        let selected_item = dragItemMiddleList[event.dragged.payload];
                        if (selected_item === item) {
                            let newIsCorrectAnswer = [...isCorrectAnswer];
                            newIsCorrectAnswer[index] = index;
                            setAnswer(newIsCorrectAnswer);

                            let totalQuestions = receivingItemList.filter((item) => {
                                if (vowels.includes(item)) {
                                    return true;
                                }
                            });
                            let correctAnswers = newIsCorrectAnswer.filter((item) => {
                                if (item !== undefined && item >= 0) {
                                    return true;
                                }
                            })

                            if (totalQuestions.length === correctAnswers.length) {
                                setAnswer([]);
                                setFinish(true);
                                swipeRight();
                            }
                        }
                    }}
                />
            );
        }

        const DragUIComponent = ({item, index}) => {
            return (
                <DraxView
                    dragPayload={index}
                    longPressDelay={0}
                    key={index}
                >
                    < Box
                        px="4"
                        m="2"
                        rounded="md"
                        bg="gray.200">
                        < Text
                            color="gray.500"
                            fontWeight="bold"
                            fontSize="4xl">
                            {item}
                        </Text>
                    </Box>
                </DraxView>
            );
        }

        const FlatListItemSeparator = () => {
            return (<View/>);
        }

        return (
            <GestureHandlerRootView style={{flex: 1}}>
                <DraxProvider>
                    <Center flex={1} justifyContent="center" alignItems="center">
                        <View display="flex" flexDirection="row" mb={6}>
                            {receivingItemList.map((item, index) => {
                                if (vowels.includes(item)) {
                                    return (
                                        ReceivingZoneUIComponent({item, index})
                                    )
                                } else {
                                    return (
                                        <Box my={2}>
                                            <Text color="brand.700" fontWeight="bold" fontSize="6xl">
                                                {item}
                                            </Text>
                                        </Box>
                                    )
                                }
                            })}
                        </View>
                        <View display="flex" flexDirection="row" mb={6}>
                            <DraxList
                                data={dragItemMiddleList}
                                renderItemContent={DragUIComponent}
                                keyExtractor={(item, index) => index.toString()}
                                numColumns={4}
                                ItemSeparatorComponent={FlatListItemSeparator}
                                scrollEnabled={true}
                            />
                        </View>
                        <View>
                            <Image source={{
                                uri: picture
                            }} alt="Alternate Text" size="2xl" borderRadius="md"/>
                        </View>
                    </Center>
                </DraxProvider>
            </GestureHandlerRootView>
        )
    } else {
        setTimeout(closePicture, 3000);
        return (
            <Center flex={1} justifyContent="center" alignItems="center">
                <Box rounded="lg" alignItems="center" justifyContent="center" w="100%" h="500" p={4} my={3}>
                    {
                        !isShowPicture &&
                        <Text color="brand.700" fontWeight="bold" fontSize="6xl">
                            {name}
                        </Text>
                    }
                    {
                        isShowPicture &&
                        <Center>
                            <Image source={{
                                uri: picture
                            }} alt="Alternate Text" size="2xl" borderRadius="md"/>
                        </Center>
                    }
                </Box>
            </Center>
        )
    }
}

export default ContentCards;

const styles = StyleSheet.create({
    receiving: {
        backgroundColor: 'transparent',
        borderColor: '#10b981',
        borderWidth: 2,
        borderRadius: 10,
    },
});