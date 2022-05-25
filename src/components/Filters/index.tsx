import * as React from 'react'
import {useState} from 'react'

import {
    FiltersContainer,
    Form,
    RadioField,
    RadioInput
} from '../../styled-components/Filters-styled'
import {useActions} from "../../hooks/use-actions";
import {ClearButton, DisabledButton, InputTitle, SubmitButton} from "../../styled-components/Common-styled";
import {Field} from "../../styled-components/Character-styled";
import {FiltersProps} from "../../pages/home";



export const Filters: React.FC<FiltersProps> = ({filtersTypes}) => {
    const [status, setStatus] = useState('')
    const [species, setSpecies] = useState('')
    const [gender, setGender] = useState('')

    const isButtonDisabled = status === '' && species === '' && gender === '';

    const {getCharacters, toggleFilters} = useActions()



    const filterCharacters = () => {
        getCharacters(1, status, species, gender);
        toggleFilters(true);
    }

    const clearAllFilters = () => {
        if (!isButtonDisabled) {
            setStatus('');
            setSpecies('');
            setGender('');
            toggleFilters(false);
            getCharacters(1);
        }
    }

    return (<FiltersContainer>
            <Form>

                <div>
                    <InputTitle>Status</InputTitle>

                    {filtersTypes?.statusTypes.map((item: string) =>
                        <RadioField key={item}>
                            <RadioInput type="radio"
                                        id={item}
                                        value={item}
                                        checked={item === status}
                                        onChange={(e) => setStatus(e.currentTarget.value)}/>

                            <label htmlFor={item}>{item}</label>
                        </RadioField>
                    )}
                </div>

                <div>
                    <InputTitle>Gender</InputTitle>
                    {filtersTypes?.genderTypes.map((item: string) =>
                        <RadioField key={item}>
                            <RadioInput type="radio"
                                        id={item}
                                        value={item}
                                        checked={item === gender}
                                        onChange={(e: React.FormEvent<HTMLInputElement>) => setGender(e.currentTarget.value)}/>
                            <label htmlFor={item}>{item}</label>
                        </RadioField>
                    )}
                </div>

                <div>
                    <InputTitle>Species</InputTitle>
                    {filtersTypes?.speciesTypes.map((item: string) =>
                        <RadioField key={item}>
                            <RadioInput type="radio"
                                        id={item}
                                        value={item}
                                        checked={item === species}
                                        onChange={(e) => setSpecies(e.currentTarget.value)}/>
                            <label htmlFor={item}>{item}</label>
                        </RadioField>
                    )}
                </div>

                <Field>
                    <ClearButton type="button" onClick={clearAllFilters}>Clear</ClearButton>
                    {isButtonDisabled ? <DisabledButton>Filter</DisabledButton> :
                        <SubmitButton type="button" onClick={filterCharacters}>
                            Filter
                        </SubmitButton>}
                </Field>

            </Form>

        </FiltersContainer>
    )
}
