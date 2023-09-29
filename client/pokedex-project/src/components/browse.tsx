import React, { useState } from "react";
import NavBar from "./navbar";
import '/Users/Owen/Desktop/pokedex/client/pokedex-project/src/css/browse.css';
import { Button, FormControl, InputLabel, MenuItem, Select, Stack, TextField } from "@mui/material";

export default function Browse() {

    const [search, setSearch] = React.useState("");
    const [primaryType, setPrimaryType] = React.useState("");
    const [secondaryType, setSecondaryType] = React.useState("");
    const [showSearch, setShowSearch] = React.useState(false);
    const [generation, setGeneration] = React.useState("");

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
        'Generation I',
        'Generation II',
        'Generation III',
        'Generation IV',
        'Generation V',
        'Generation VI',
        'Generation VII',
        'Generation VIII',
        'Generation IX'
    ];

    return (
        <>
        <NavBar />
        <div className="search-area">
            <div className="search-bars">
                <Stack spacing={2}>
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

                    <Button variant="contained">Search</Button>
                </Stack>
                    
                    {!showSearch && (
                        <Button variant="text" onClick={() => setShowSearch(true)}>More Filters</Button>
                    )}

                    {showSearch && (
                        <FormControl variant="filled" sx={{ m:1, maxWidth: 180 }}>
                        <InputLabel id="select-generation">Generation</InputLabel>
                        <Select
                            labelId="generation"
                            id="generation"
                            value={generation}
                            label="Generation"
                            onChange={handleGeneration}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {generations.map((generation) => (
                                <MenuItem value={generation}>
                                    <em>{generation}</em>
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    )}

                </Stack>
            </div>
        </div>
        </>
    );
}