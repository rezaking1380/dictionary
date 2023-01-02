
export namespace Actions {
    export const WORD_REQUEST = 'word/request'
    export const WORD_SUCCESS = 'word/success'
    export const WORD_FAIL = 'word/fail'

    export interface Action<T> {
        type:string,
        payload: T
    }
}