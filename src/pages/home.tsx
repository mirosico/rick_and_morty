import * as React from "react";
import {Characters} from "../components/Characters";
import {MainContainer} from "../styled-components/App-styled";
import {Filters} from "../components/Filters";
import {useActions} from "../hooks/use-actions";
import {useEffect} from "react";

export interface FiltersProps {
    filtersTypes: { statusTypes: string[], genderTypes: string[], speciesTypes: string[] } | null
}

export const HomePage: React.FC<FiltersProps> = ({filtersTypes}) => {

    const {getCharacters} = useActions();

    useEffect(() => {
        getCharacters(1);
    }, []);

    return (
        <MainContainer>
            <h1>Rick And Morty Characters</h1>
            <Filters filtersTypes={filtersTypes}/>
            <Characters/>
        </MainContainer>
    )
}