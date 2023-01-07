
export default interface initState {
    Word: word[],
    Status: string,
    Error:string
}

export interface word {
    word?: string,
    phonetic?: string ,
    phonetics: phonetics[],
    meanings?: meanings[],
}

export interface phonetics {
    text?:string,
    audio:string
}

export interface meanings {
    partOfSpeech: string,
    definitions: definitions[],
    synonyms: string[],
    antonyms: string[]
}

export interface definitions {
    definition: string,
    synonyms: string[],
    antonyms:string[]
}

export interface definition {
    definition: string,
    synonyms:string[],
    antonyms:string[],
    example:string
}