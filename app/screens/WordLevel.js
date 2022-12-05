import {Text, FlatList, HStack, Avatar, Spacer, Box, Center, Pressable} from "native-base";
import {useNavigation} from "@react-navigation/native";
import {WordsContext} from "../stores/words-context";
import {useContext} from "react";
import {Image} from "react-native";

const LEVEL = [
    {
        "id": 0,
        "name": '2 нас',
        "image": require('../assets/level/1.png'),
    },
    {
        "id": 1,
        "name": '3 нас',
        "image": require('../assets/level/2.png'),
    },
    {
        "id": 2,
        "name": '4 нас',
        "image": require('../assets/level/3.png'),
    },
    {
        "id": 3,
        "name": '5 нас',
        "image": require('../assets/level/4.png'),
    },
    {
        "id": 4,
        "name": '6 нас',
        "image": require('../assets/level/5.png'),
    },
    {
        "id": 5,
        "name": '7 нас',
        "image": require('../assets/level/6.png'),
    },
    {
        "id": 6,
        "name": '8 нас',
        "image": require('../assets/level/7.png'),
    },
    {
        "id": 7,
        "name": '9 нас',
        "image": require('../assets/level/8.png'),
    },
]

function WordLevel() {
    const wordsCtx = useContext(WordsContext);
    const navigation = useNavigation();

    return (
        <Box p="5">
            <FlatList data={LEVEL} renderItem={({item, index}) => {
                return (
                    <Box bg="white" pl={["0", "4"]} pr={["0", "5"]} py="2" mb="2" borderRadius="8">
                        <Pressable
                            justifyContent="center"
                            alignItems="center"
                            onPress={() => {
                                wordsCtx.filterLevel(item.id);
                                navigation.navigate('FlashCards', {
                                    "levelId": item.id,
                                    "levelName": item.name,
                                });
                            }}>
                            <Image source={item.image} style={{height: 60, width: 60}}/>
                            <Center>
                                <Text color="gray.700" bold fontSize="xl">
                                    {item.name}
                                </Text>
                            </Center>
                        </Pressable>
                    </Box>
                )
            }} keyExtractor={item => item.id}/>
        </Box>
    )
}

export default WordLevel;