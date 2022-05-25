import {
  UPDATE_CHARACTERS, UPDATE_PAGES, CLEAR_STATE, DELETE_CHOSEN_CHARACTER,
  SET_CHOSEN_CHARACTER, TOGGLE_FILTERS
} from '../action-types'
import {Action} from "../actions";


interface initialStateType {
  pageNumber: number,
  prevPageUrl: string | null,
  nextPageUrl: string | null,
  numberOfPages: number | null,
  charactersCount: number,
  characters: characterType[] | null,
  chosenCharacter: characterType | null,
  filtersIsActive: boolean,
}

export interface characterType {
  id: number,
  name: string,
  status: string,
  species: string,
  type: string,
  gender: string,
  origin: {
    name: string,
    url: string
  }
  location: {
    name: string,
    url: string,
  }
  image: string,
  episode: string[],
  url: string,
  created: string
}

export const initialState: initialStateType = {
  pageNumber: 1,
  prevPageUrl: null,
  nextPageUrl: null,
  numberOfPages: 0,
  charactersCount: 0,
  characters: null,
  chosenCharacter: null,
  filtersIsActive: false,
}

export const characterReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case UPDATE_CHARACTERS:
      return {
        ...state,
        characters: action.payload.characters,
        charactersCount: action.payload.charactersCount,
      }
    case UPDATE_PAGES:
      return {
        ...state,
        pageNumber: action.payload.pageNumber,
        prevPageUrl: action.payload.prevPageUrl,
        nextPageUrl: action.payload.nextPageUrl,
        numberOfPages: action.payload.numberOfPages,
      }
    case SET_CHOSEN_CHARACTER:
      return {
        ...state,
        chosenCharacter: action.payload
      }

    case DELETE_CHOSEN_CHARACTER:
      return {
        ...state,
        chosenCharacter: null,
        chosenCharacterFirstEpisode: ''
      }
    case TOGGLE_FILTERS:
      return {
        ...state,
        filtersIsActive: action.payload
      }
    case CLEAR_STATE:
      return initialState
    default:
      return state
  }
}



