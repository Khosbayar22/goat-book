import {createContext, useReducer} from "react";

export const WordsContext = createContext({
    words: [],
    levels: [],
    filterLevel() {},
})

function wordsReducer(state, action) {
    switch (action.type) {
        case 'filterLevel':
            return state.filter((word) => word.level === action.payload)
        case 'resetWords':
            return state.sort((a, b) => {
                return a.level - b.level;
            }).filter((word) => word.level === 2)
        case 'setWords':
            state = action.payload
            return action.payload.filter((word) => word.level === 1)
        default:
            return state;
    }
}

export default function WordsContextProvider({children}) {
    const [wordsState, dispatch] = useReducer(wordsReducer, []);

    function filterLevel(levelId) {
        dispatch({type: 'filterLevel', payload: levelId})
    }

    function resetWords() {
        dispatch({type: 'resetWords'})
    }

    function setWords(payload) {
        dispatch({type: 'setWords', payload: payload})
    }

    const value = {
        words: wordsState,
        setWords: setWords,
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