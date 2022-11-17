import {Box, Center, Pressable, Text} from "native-base";

function NavigatorBox({name, icon}) {
    return (
        <Box alignItems="center">
            <Pressable>
                <Box>
                    <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
                        { name }
                    </Text>
                </Box>
            </Pressable>
        </Box>
    )
}

export default NavigatorBox;