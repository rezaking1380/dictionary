import { Axios } from "axios"
import { Word } from "../Redux/Action";

class WordService {
    private httpClient : Axios
    private baseUrl : string = 'https://api.dictionaryapi.dev/api/v2/entries/en/'
    constructor(httpClient: Axios){
        this.httpClient = httpClient;
    }
    readonly getWord = async (word:string) : Promise<Word> => {
        const result = await this.httpClient.get(`${this.baseUrl}${word}`)
        return result.data
    }
}

export default WordService