import axios from "axios"
import {characterType} from "../reducers"
import {Dispatch} from "redux";
import {
    CLEAR_STATE,
    DELETE_CHOSEN_CHARACTER,
    SET_CHOSEN_CHARACTER, TOGGLE_FILTERS,
    UPDATE_CHARACTERS,
    UPDATE_PAGES
} from "../action-types";
import {
    Action,
    clearStateAction,
    deleteChosenCharacterAction,
    setChosenCharacterAction, toggleFiltersAction,
    updateCharactersAction,
    updatePagesAction
} from "../actions";


export interface paginationType {
    pageNumber: number,
    prevPageUrl: string,
    nextPageUrl: string,
    numberOfPages: number
}

export interface charactersArrayAndTotalCount {
    characters: characterType[],
    charactersCount: number
}

export function updatePages(pagination: paginationType) : updatePagesAction {
    return {type: UPDATE_PAGES, payload: pagination}
}

export function updateCharacters(charactersListAndTotalCount: charactersArrayAndTotalCount) : updateCharactersAction {
    return {type: UPDATE_CHARACTERS, payload: charactersListAndTotalCount}
}

export function setChosenCharacter(character: characterType): setChosenCharacterAction {
    return {type: SET_CHOSEN_CHARACTER, payload: character}
}


export function deleteChosenCharacter() : deleteChosenCharacterAction {
    return {type: DELETE_CHOSEN_CHARACTER}
}

export function clearState() : clearStateAction {
    return {type: CLEAR_STATE}
}

export function toggleFilters(bool: boolean) : toggleFiltersAction {
    return {type: TOGGLE_FILTERS, payload: bool}
}

const API = axios.create({
    baseURL: "https://rickandmortyapi.com/api",
})

export const getCharacters =
    (pageNumber: number, status = '', species = '', gender = '') => {
        return async (dispatch: Dispatch<Action>) => {
            try {
                const result =
                    await API.get(`/character/?page=${pageNumber}&status=${status}&species=${species}&gender=${gender}`)
                if (result.status === 200) {
                    const prevPageUrl = result.data.info.prev;
                    const nextPageUrl = result.data.info.next;
                    const numberOfPages = result.data.info.pages;
                    dispatch(updatePages({pageNumber, prevPageUrl, nextPageUrl, numberOfPages}))
                    const characters = result.data.results;
                    const charactersCount = result.data.info.count;
                    dispatch(updateCharacters({characters, charactersCount}))
                }
            } catch (err) {
                dispatch(clearState())
                dispatch(toggleFilters(true))
            }
        }
    }

export const getCharacterDetails = (id: number) => async (dispatch: Dispatch<Action>) => {
    try {
        const result =
            await API.get(`/character/${id}`)
        if (result.status === 200) {
            dispatch(setChosenCharacter(result.data))
        }
    } catch (err) {
        dispatch(clearState())
    }
}


