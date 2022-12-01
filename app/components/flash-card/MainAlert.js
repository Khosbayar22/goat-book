import {Text, VStack, Alert, HStack, IconButton, CloseIcon} from "native-base";

export default function MainAlert({status, title}) {
    return (
        <Alert m="4" status={status}>
            <VStack space={2} flexShrink={1}>
                <HStack flexShrink={1} space={2} justifyContent="space-between">
                    <HStack space={2} flexShrink={1}>
                        <Alert.Icon mt="1"/>
                        <Text fontSize="md" color="coolGray.800">
                            {title}
                        </Text>
                    </HStack>
                </HStack>
            </VStack>
        </Alert>
    )
}