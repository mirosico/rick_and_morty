import * as React from 'react'
import { Route, Routes} from "react-router-dom";
import {Footer} from './styled-components/App-styled';
import {HomePage} from "./pages/home";
import {WatchList} from "./pages/watch-list";
import {Header} from "./components/Header";
import {useEffect, useState} from "react";
import {useTypedSelector} from "./hooks/use-typed-selector";
import {stateType} from "./state/store";

function App() {

    const filtersIsActive = useTypedSelector((state: stateType) => state.filtersIsActive);
    const characters = useTypedSelector((state: stateType) => state.characters);

    const [filtersTypes, setFiltersTypes] = useState({statusTypes: [''], genderTypes: [''], speciesTypes: ['']})

    useEffect(() => {
        if (characters && !filtersIsActive) {
            const statusTypes = Array.from(new Set(characters.slice(0)
                .map(character => character.status)));
            const genderTypes = Array.from(new Set(characters.slice(0)
                .map(character => character.gender)));
            const speciesTypes = Array.from(new Set(characters.slice(0)
                .map(character => character.species)));
            setFiltersTypes({statusTypes, genderTypes, speciesTypes})
        }
    }, [characters])


    return (<>
        <Header/>
        <Routes>
            <Route path="/" element={<HomePage filtersTypes={filtersTypes}/>}/>
            <Route path="/watch-list" element={<WatchList/>}/>
        </Routes>
        <Footer><p>by y.mysko</p>2022</Footer>
    </>);
}


export default App;