
export default interface initState {
    Word: word,
    Loading: boolean,
    Error:string
}

export interface word {
    word?: string,
    phonetic?: string ,
    phonetics?: phonetics,
    meanings?: meanings[],
}

export interface phonetics {
    text:string,
    audio:string
}

export interface meanings {
    portOfSpeech: string,
    definitions: definitions[],
    synonyms: string[],
    antonyms: string[]
}

export interface definitions {
    definition: string,
    synonyms: string[],
    antonyms:string[]
}