import {useState} from 'react';
import {Box, Center, IconButton, Text, View} from "native-base";
import SwipeCards from "react-native-swipe-cards-deck"
// import { deleteDoc, doc, getDoc, setDoc } from 'firebase/firestore';
// import {db} from '../../utils/firestore';

import ContentCard from "./ContentCard";
import FinishedCard from "./FinishedCard";
import Ionicons from "react-native-vector-icons/Ionicons";
import React from "react";

function SwiperContainer() {
    // const [vocabularyDoc, setVocabularyDoc] = useState(null);

    // const fetchVocabulary = () => {
    //     const myDoc = doc(db, "vocabulary", "vocabulary")
    //
    //     getDoc(myDoc)
    //         .then((snapshot) => {
    //             if (snapshot.exists) {
    //                 setVocabularyDoc(snapshot.data())
    //             } else {
    //                 console.log("Error")
    //             }
    //         })
    //         .catch((error) => {
    //             alert(error.message)
    //         })
    // }
    const [isShowPicture, setShowPicture] = useState(false);

    const CONTENTS = [
        {
            "text": "Морь",
            "picture": "https://images.unsplash.com/photo-1598974357801-cbca100e65d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        },
        {
            "text": "Тэмээ",
            "picture": "https://images.unsplash.com/photo-1553983658-0d7afeb5c53f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
        },
        {
            "text": "Хонь",
            "picture": "https://images.unsplash.com/photo-1588942173353-0c53a1bf9081?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80"
        },
        {
            "text": "Ямаа",
            "picture": "https://images.unsplash.com/photo-1588466585717-f8041aec7875?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
        },
        {
            "text": "Үхэр",
            "picture": "https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=788&q=80"
        },
    ]

    const handlePicture = () => {
        setShowPicture(!isShowPicture)
    }
    return (
        <View flex="1">
            <View flex="8">
                <SwipeCards
                    cards={CONTENTS}
                    loop={false}
                    keyExtractor={(contentData) => String(contentData.text)}
                    renderCard={(contentData) => <ContentCard name={contentData.text} picture={contentData.picture} isShowPicture={isShowPicture}/>}
                    renderNoMoreCards={() => <FinishedCard/>}
                    showYup={true}
                    showNope={true}
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