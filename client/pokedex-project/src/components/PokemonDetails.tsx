import React from "react";
import NavBar from "./Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function PokemonDetails() {
    const {pokemonName} = useParams();
    const [pokemonData, setPokemonData] = React.useState([]);
    console.log(pokemonName);

    React.useEffect(() => {

        getPokemon();

        async function getPokemon() {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
            const results = await response.data;
            setPokemonData(results);
        }
    }, [])
    return (
        <>
            <NavBar />
            <h1>{pokemonName}</h1>
        </>
    );
}