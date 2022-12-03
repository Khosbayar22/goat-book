import {Text, View} from "native-base";
import {useContext, useEffect, useLayoutEffect} from "react";

import SwiperContainer from "../components/flash-card/SwiperContainer";
import {WordsContext} from "../stores/words-context";
import MainAlert from "../components/flash-card/MainAlert";
import {fetchWords} from "../utils/http";
import Temp from "../components/flash-card/Temp"

function FindWords({route, navigation}) {
    let levelId = route.params?.levelId;
    let isLevelEditing = !!levelId;

    function hideHeader() {
        navigation.setOptions({
            headerShown: false
        })
    }

    const wordsCtx = useContext(WordsContext);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isLevelEditing ? `Цээж бичиг ( ${levelId} нас)` : 'Цээж бичиг',
            headerShown: true
        })
    })

    useEffect(() => {
        async function getWords() {
            const words = await fetchWords();
            wordsCtx.setWords(words)
        }

        getWords();
    }, [])

    let content = <MainAlert status={'info'} title={'Уучлаарай'}/>

    const words = wordsCtx.words

    if (words.length > 0) {
        content = <SwiperContainer words={words} hideHeader={hideHeader} isShowPictureArgs={true}/>
    }

    return (
        <View flex="1">
            {/*{content}*/}
            <Temp />
        </View>
    )
}

export default FindWords;