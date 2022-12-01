import {Text, FlatList, HStack, Avatar, Spacer, Box, Center, Pressable} from "native-base";
import {useNavigation} from "@react-navigation/native";
import {WordsContext} from "../stores/words-context";
import {useContext} from "react";

const LEVEL = [
    {
        "id": 2,
        "name": '2 нас',
        "image": '',
    },
    {
        "id": 3,
        "name": '3 нас',
        "image": '',
    },
    {
        "id": 4,
        "name": '4 нас',
        "image": '',
    },
    {
        "id": 5,
        "name": '5 нас',
        "image": '',
    },
    {
        "id": 6,
        "name": '6 нас',
        "image": '',
    },
    {
        "id": 7,
        "name": '7 нас',
        "image": '',
    },
    {
        "id": 8,
        "name": '8 нас',
        "image": '',
    },
]

function WordLevel() {
    const wordsCtx = useContext(WordsContext);
    const navigation = useNavigation();

    return (
        <Box p="5">
            <FlatList data={LEVEL} renderItem={({
                                                    item
                                                }) => <Box borderBottomWidth="2" _dark={{
                borderColor: "gray.200"
            }} borderColor="gray.300" pl={["0", "4"]} pr={["0", "5"]} py="2">
                <Pressable onPress={() => {
                    wordsCtx.filterLevel(item.id);
                    navigation.navigate('FlashCards', {
                        "levelId": item.id
                    });
                }}>
                    <HStack space={[2, 3]} justifyContent="space-between">
                        <Avatar size="48px" source={{
                            uri: item.image
                        }}/>
                        <Center>
                            <Text color="gray.700" bold>
                                {item.name}
                            </Text>
                        </Center>
                        <Spacer/>
                    </HStack>
                </Pressable>
            </Box>} keyExtractor={item => item.id}/>
        </Box>
    )
}

export default WordLevel;