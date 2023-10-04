import React from "react";
import NavBar from "./navbar";
import './browse.css';
import { FormControl, InputLabel, MenuItem, Select, Stack, TextField } from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Gallery from "./gallery";
import axios from "axios";

export default function Browse() {

    const [search, setSearch] = React.useState("");
    const [primaryType, setPrimaryType] = React.useState("");
    const [secondaryType, setSecondaryType] = React.useState("");
    const [generation, setGeneration] = React.useState("");
    const temp: any = [];
    const [data, setData] = React.useState(temp);
    const [pokemonData, setPokemonData] = React.useState(temp);

    const handleChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setSearch(e.target.value);
    }

    const handleType = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setPrimaryType(e.target.value);
    }

    const handleSecondaryType = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setSecondaryType(e.target.value);
    }

    const handleGeneration = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setGeneration(e.target.value);
    }

    const types = [
        "Bug",
        "Dark",
        "Dragon",
        "Electric",
        "Fairy",
        "Fighting",
        "Fire",
        "Flying",
        "Ghost",
        "Grass",
        "Ground",
        "Ice",
        "Normal",
        "Poison",
        "Psychic",
        "Rock",
        "Steel",
        "Water"
    ];

    const generations = [
        ['Generation I', '1'],
        ['Generation II', '2'],
        ['Generation III', '3'],
        ['Generation IV', '4'],
        ['Generation V', '5'],
        ['Generation VI', '6'],
        ['Generation VII', '7'],
        ['Generation VIII', '8'],
        ['Generation IX', '9']
    ];

    async function getPokemonData(url: string) {
        const response = await fetch(url);
        const result = await response.json();
        return result;
    }

    //filter data in here
    //pass in all data into a gallery which will render it

    React.useEffect(() => {
        getData();

        async function getData() {
            if (generation === "") {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=1010`);
                const result = await response.json();
                const apiCalls = result.results.map((pokemon: any) => {
                    return getPokemonData(pokemon.url);
                })
                const pokemonData = await Promise.all(apiCalls);
                setData([]);
                setData(pokemonData);
            }
            else if (generation !== "") {
                const response = await fetch(`https://pokeapi.co/api/v2/generation/${parseInt(generation)}/`);
                const result = await response.json();
                const apiCalls = result.results.map((pokemon: any) => {
                    return getPokemonData(pokemon.url);
                })
                const pokemonData = await Promise.all(apiCalls);
                setData([]);
                setData(pokemonData);
            }
        }
    }, []);

    

    return (
        <>
        <NavBar />
        <div className="search-area">
            <div className="search-bars">
                <Stack direction="row" spacing={2}>
                    <TextField
                        id="pokemon_name"
                        type="search"
                        label="Search for a Pokemon name"
                        variant="filled"
                        value={search}
                        onChange={handleChange}
                        autoFocus
                        sx={{ width: 500 }}
                        InputProps={{ startAdornment: (
                            <InputAdornment position='start'>
                                <SearchIcon />
                            </InputAdornment>
                        ) }}
                    />
                    <FormControl variant="filled" sx={{ m:1, minWidth: 180 }}>
                        <InputLabel id="select-primary-type">Primary Type</InputLabel>
                        <Select
                            labelId="primary-type"
                            id="primary-type"
                            value={primaryType}
                            label="Primary Type"
                            onChange={handleType}
                            sx={{ backgroundColor: "white" }}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {types.map((type) => (
                                <MenuItem value={type}>
                                    <em>{type}</em>
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl variant="filled" sx={{ m:1, minWidth: 180 }}>
                        <InputLabel id="select-secondary-type">Secondary Type</InputLabel>
                        <Select
                            labelId="secondary-type"
                            id="secondary-type"
                            value={secondaryType}
                            label="Secondary Type"
                            onChange={handleSecondaryType}
                            sx={{ backgroundColor: "white" }}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {types.map((type) => (
                                <MenuItem value={type}>
                                    <em>{type}</em>
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <FormControl variant="filled" sx={{ m:1, minWidth: 180 }}>
                        <InputLabel id="select-generation">Generation</InputLabel>
                        <Select
                            labelId="generation"
                            id="generation"
                            value={generation}
                            label="Generation"
                            onChange={handleGeneration}
                            sx={{ backgroundColor: "white" }}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {generations.map((generation) => (
                                <MenuItem value={generation[1]}>
                                    <em>{generation[0]}</em>
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Stack>

                
            </div>
        </div>
            <div className="display-area">
                {/*<Gallery searchTerm={search} primaryType={primaryType} secondaryType={secondaryType} generation={generation} />*/}
            </div>
        </>
    );
}