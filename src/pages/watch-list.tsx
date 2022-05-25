import * as React from "react";
import {MainContainer} from "../styled-components/App-styled";
import {CloseButton, InputTitle, SubmitButton, TextInput} from "../styled-components/Common-styled";
import {CheckBox, WatchListForm, WatchListEpisodes, ButtonField} from "../styled-components/WatchList";
import {useEffect, useState} from "react";
import axios from "axios";

interface WatchListProp {
    [name: string]: boolean
}

export const WatchList: React.FC = () => {

    const [watchlist, setWatchList] = useState<WatchListProp>({});

    const [newEpisode, setNewEpisode] = useState<string>("");

    const [maxEpisodeNumber, setMaxEpisodeNumber] = useState(1);


    useEffect(() => {
        (async () => {
            try {
                const data = await axios.get("https://rickandmortyapi.com/api/episode");
                setMaxEpisodeNumber(data.data.info.count)
            } catch (error) {
                console.log(error);
            }
        })();

        if (localStorage.getItem("watchlist")) {
            setWatchList(JSON.parse(localStorage.getItem("watchlist") || ""));
        }
    }, [])

    const saveData = (newWatchList: WatchListProp) => {
        localStorage.setItem("watchlist", JSON.stringify(newWatchList));
    };

    const onChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
        const key = e.currentTarget.value;
        const newWatchList = {...watchlist, [key]: e.currentTarget.checked}
        setWatchList(newWatchList);
        saveData(newWatchList);
    }

    const onAddEpisode = () => {
        if (!!Object.keys(watchlist).filter((episodeId) => episodeId === newEpisode).length) {
            alert("Enter unique episode");
            return;
        }
        if (!newEpisode || parseInt(newEpisode) <= 0 || parseInt(newEpisode) > maxEpisodeNumber) {
            alert("Enter valid episode");
            return;
        }
        if (newEpisode) {
            const newWatchList = {...watchlist, [newEpisode]: false}
            setWatchList(newWatchList);
            setNewEpisode("");
            saveData(newWatchList);
        }
    };

    const deleteEpisode = (id: string): void => {
        let newWatchList = {...watchlist};
        delete newWatchList[id];
        setWatchList(newWatchList);
        saveData(newWatchList);
    };


    return <MainContainer>
        <h1>Watch List</h1>

        <WatchListForm>
            <InputTitle>{`Enter episode you prefer to to watch`}</InputTitle>
            <ButtonField>
                <TextInput type="number"
                           min="1"
                           placeholder={`(1-${maxEpisodeNumber})`}
                           max={maxEpisodeNumber}
                           value={newEpisode}
                           onChange={(e) => {
                               setNewEpisode(e.currentTarget.value)
                           }
                           }/>
                <SubmitButton onClick={onAddEpisode}>Add</SubmitButton>
            </ButtonField>

            <WatchListEpisodes>
                {!!Object.keys(watchlist).length && Object.keys(watchlist).map(key => {
                    return <li key={key}>
                        <CheckBox type="checkbox"
                               value={key}
                               id={key}
                               checked={watchlist[key]}
                               onChange={onChecked}
                        />
                        <label htmlFor={key}>{`Rick&Morty. Episode ${key}`}</label>
                        <CloseButton onClick={() => {
                            deleteEpisode(key)
                        }}>&#215;</CloseButton>
                    </li>
                })}
            </WatchListEpisodes>
        </WatchListForm>

    </MainContainer>
}