import {createContext, useReducer} from "react";

const DUMMY_WORDS = [
    {
        "text": "Морь",
        "picture": "https://images.unsplash.com/photo-1598974357801-cbca100e65d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        "level": 5,
    },
    {
        "text": "Тэмээ",
        "picture": "https://images.unsplash.com/photo-1553983658-0d7afeb5c53f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
        "level": 4,
    },
    {
        "text": "Хонь",
        "level": 4,
        "picture": "https://images.unsplash.com/photo-1588942173353-0c53a1bf9081?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80"
    },
    {
        "text": "Ямаа",
        "level": 3,
        "picture": "https://images.unsplash.com/photo-1588466585717-f8041aec7875?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
    },
    {
        "text": "Үхэр",
        "level": 2,
        "picture": "https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=788&q=80"
    },
]

export const WordsContext = createContext({
    words: [],
    levels: [],
    filterLevel() {
    },
})

function wordsReducer(state, action) {
    switch (action.type) {
        case 'filterLevel':
            state = DUMMY_WORDS.filter((word) => word.level === action.payload)
            return state
        case 'resetWords':
            state = DUMMY_WORDS.sort((a, b) => {
                return a.level - b.level;
            }).filter((word) => word.level === 2)
            return state
        default:
            return state;
    }
}

export default function WordsContextProvider({children}) {
    const words = DUMMY_WORDS.sort((a, b) => {
        return a.level - b.level;
    }).filter((word) => word.level === 2)
    const [wordsState, dispatch] = useReducer(wordsReducer, words);

    function filterLevel(levelId) {
        dispatch({type: 'filterLevel', payload: levelId})
    }

    function resetWords() {
        dispatch({type: 'resetWords'})
    }

    const value = {
        words: wordsState,
        filterLevel: filterLevel,
        resetWords: resetWords
    }
    return <WordsContext.Provider value={value}>{children}</WordsContext.Provider>
}


function levelsReducer(state, action) {
    switch (action.type) {
        default:
            return state;
    }
}