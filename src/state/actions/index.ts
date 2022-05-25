import {
    CLEAR_STATE,
    DELETE_CHOSEN_CHARACTER,
    SET_CHOSEN_CHARACTER, TOGGLE_FILTERS,
    UPDATE_CHARACTERS,
    UPDATE_PAGES
} from "../action-types";
import {charactersArrayAndTotalCount, paginationType} from "../action-creators";
import {characterType} from "../reducers";

export interface updatePagesAction {
    type: typeof UPDATE_PAGES,
    payload: paginationType
}

export interface updateCharactersAction {
    type: typeof UPDATE_CHARACTERS,
    payload: charactersArrayAndTotalCount
}

export interface setChosenCharacterAction {
    type: typeof SET_CHOSEN_CHARACTER,
    payload: characterType
}

export interface deleteChosenCharacterAction {
    type: typeof DELETE_CHOSEN_CHARACTER
}

export interface clearStateAction {
    type: typeof CLEAR_STATE
}

export interface toggleFiltersAction {
    type: typeof TOGGLE_FILTERS,
    payload: boolean
}

export type Action =
    updatePagesAction
    | updateCharactersAction
    | setChosenCharacterAction
    | deleteChosenCharacterAction
    | clearStateAction
    | toggleFiltersAction;