import * as React from 'react'
import { useEffect } from 'react'
import { stateType } from '../../state/store'

import {
  SemitransparentBackgroundForModal, CharacterDetailsModal,
  ImageOnDetailPage, StatusCircleOnDetailPage, CharacterDetailedInfo,
  FieldHeader, Field, Species, Info
} from '../../styled-components/Character-styled'
import { CloseButton } from '../../styled-components/Common-styled'
import { backgroundColors } from '../Characters/Character'
import {useActions} from "../../hooks/use-actions";
import {useTypedSelector} from "../../hooks/use-typed-selector";
import {RadioField} from "../../styled-components/Filters-styled";

export const CharacterDetails: React.FC<PropsType> = ({ characterId, toggleCharacterDetailsVisibility }) => {

  const chosenCharacter = useTypedSelector((state: stateType) => state.chosenCharacter)

  const {getCharacterDetails, deleteChosenCharacter} = useActions();

  useEffect(() => {
    getCharacterDetails(characterId);
  }, [getCharacterDetails, characterId])


  function hideCharacterDetails() {
    toggleCharacterDetailsVisibility(false)
    document.body.style.overflowY = ''
    deleteChosenCharacter();
  }

  return <div>
    {chosenCharacter ? <SemitransparentBackgroundForModal>
      <CharacterDetailsModal>
        <CloseButton onClick={hideCharacterDetails}>&#215;</CloseButton>
        <ImageOnDetailPage src={chosenCharacter.image} alt={`character ${chosenCharacter.name}`} />
        <CharacterDetailedInfo>
          <h3>{chosenCharacter.name}</h3>
          <RadioField>
            <StatusCircleOnDetailPage
                color={backgroundColors[chosenCharacter.status.toLowerCase() as keyof typeof backgroundColors]} />
            <span>{chosenCharacter.status}</span><br />
          </RadioField>
          <Species>{chosenCharacter.species}</Species>
          {chosenCharacter.type ?
            <Field>
              <FieldHeader>Type:</FieldHeader>
              <Info>{chosenCharacter.type}</Info>
            </Field> : null}
          <Field>
            <FieldHeader>Gender:</FieldHeader>
            <Info>{chosenCharacter.gender}</Info>
          </Field>
          <Field>
            <FieldHeader>Origin:</FieldHeader>
            <Info>{chosenCharacter.origin.name}</Info>
          </Field>
          <Field>
            <FieldHeader>Location:</FieldHeader>
            <Info>{chosenCharacter.location.name}</Info>
          </Field>

        </CharacterDetailedInfo>
      </CharacterDetailsModal>
    </SemitransparentBackgroundForModal> : null}
  </div>
}

interface PropsType {
  characterId: number,
  toggleCharacterDetailsVisibility: (bool: boolean) => void
}