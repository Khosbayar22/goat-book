import {Text, VStack, Alert, HStack, IconButton, Center, View, Button} from "native-base";
import {Image} from "react-native";

export default function MainAlert({status, title}) {
    const navigateFlashCard = () => {

    }
    return (
        // <Alert m="4" status={status}>
        //     <VStack space={2} flexShrink={1}>
        //         <HStack flexShrink={1} space={2} justifyContent="space-between">
        //             <HStack space={2} flexShrink={1}>
        //                 <Alert.Icon mt="1"/>
        //                 <Text fontSize="md" color="coolGray.800">
        //                     {title}
        //                 </Text>
        //             </HStack>
        //         </HStack>
        //     </VStack>
        // </Alert>
        <View>
            <Center>
                <Image source={require("../../assets/not-found.png")} style={{height: 250, width: 250}}/>
                {/*<Text fontSize="2xl" color="coolGray.800" bold>*/}
                {/*    {title}*/}
                {/*</Text>*/}
                <Button borderWidth="3" borderColor="white"
                        bg="brand.700"
                        leftIcon={<Image source={require("../../assets/go.png")} style={{height: 40, width: 40}}/>}
                        onPress={navigateFlashCard} mx={5} key="lg" size="lg"
                        rounded="full">
                    <Text color="white" fontSize="2xl" fontWeight="bold">
                        Буцах
                    </Text>
                </Button>
            </Center>
        </View>
    )
}