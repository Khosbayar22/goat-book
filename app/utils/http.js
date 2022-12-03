import axios from "axios";


const url = 'https://goat-ec7c6-default-rtdb.asia-southeast1.firebasedatabase.app/words.json'

export async function fetchWords() {
    const response = await axios.get(url);
    const words = []
    for (const key in response.data) {
        const word = {
            "id": key,
            "text": response.data[key].text,
            "picture": response.data[key].picture,
            "level": response.data[key].level,
            "level_name": response.data[key].level_name,
            "type": response.data[key].type,
            "highlight": response.data[key].highlight,
        }
        words.push(word)
    }
    return words;
}