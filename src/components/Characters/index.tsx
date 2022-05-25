import * as React from 'react'
import {useState} from 'react'
import {CharactersContainer} from '../../styled-components/Characters-styled'

import {Character} from './Character/index'
import {CharacterDetails} from '../CharacterDetails'
import {Pagination} from '../Pagination'
import {useTypedSelector} from "../../hooks/use-typed-selector";
import {stateType} from "../../state/store";


export const Characters: React.FC = () => {

    const [isCharacterDetailsVisible, toggleCharacterDetailsVisibility] = useState(false)
    const [chosenCharacterId, setChosenCharacterId] = useState(0)
    const characters = useTypedSelector((state: stateType) => state.characters);

    function showCharacterDetails(id: number) {
        setChosenCharacterId(id);
        if (!isCharacterDetailsVisible) {
            toggleCharacterDetailsVisibility(true);
            document.body.style.overflowY = 'hidden'
        }
    }

    return (<>
            {isCharacterDetailsVisible ?
                <CharacterDetails
                    characterId={chosenCharacterId}
                    toggleCharacterDetailsVisibility={toggleCharacterDetailsVisibility}/>
                : null}


            <CharactersContainer>
                {characters ? characters.map(character => <Character
                        key={character.id}
                        character={character}
                        showCharacterDetails={showCharacterDetails}/>)
                    : <h2>No Characters Found</h2>}
            </CharactersContainer>

            <Pagination/>

        </>

    )
}