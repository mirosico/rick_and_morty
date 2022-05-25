import * as React from "react";
import {NavLink} from "react-router-dom";
import {HeaderWrap} from "../../styled-components/App-styled";

export const Header: React.FC = () => {

    return (<HeaderWrap>
        <nav>
            <ul>
                <li>
                    <NavLink
                        style={({isActive}) => ({padding: isActive ? "2rem 1rem 2rem 1rem" : "2rem 1rem 4rem 1rem"})}
                        to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink
                        style={({isActive}) => ({padding: isActive ? "2rem 1rem 2rem 1rem" : "2rem 1rem 4rem 1rem"})}
                        to="/watch-list">Watch</NavLink>
                </li>
            </ul>
        </nav>
    </HeaderWrap>)
}