import * as React from 'react'
import {characterType} from '../../../state/reducers'
import {
    CharacterInfo, CharacterImage,
    ButtonToOpenDetails
} from '../../../styled-components/Character-styled'


export const backgroundColors = {
    'alive': 'rgb(25, 227, 133)',
    'dead': 'rgb(209, 67, 67)',
}

export const Character: React.FC<PropsType> = ({character, showCharacterDetails}) => {
    return (
        <CharacterInfo key={character.id}>
            <CharacterImage src={character.image} alt={`character ${character.name}`}
                            onClick={() => showCharacterDetails(character.id)}/>

            <ButtonToOpenDetails onClick={() => showCharacterDetails(character.id)}>
                <h4>{character.name}</h4>
            </ButtonToOpenDetails>
        </CharacterInfo>
    )
}

interface PropsType {
    character: characterType,
    showCharacterDetails: (id: number) => void
}