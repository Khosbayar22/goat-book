import axios from "axios";


const url = 'https://goat-ec7c6-default-rtdb.asia-southeast1.firebasedatabase.app/words.json'

export async function fetchWords() {
    const response = await axios.get(url);
    console.log(response.data)
    const words = []
    for (const key in response.data) {
        console.log(key)
        const word = {}
        words.push(word)
    }
    return words;
}