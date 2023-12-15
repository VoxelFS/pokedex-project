import React from "react";
import NavBar from "./Navbar.tsx";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Box, Stack, Typography } from "@mui/material";
import { appendZero } from "./Gallery.tsx";
import { pokemonType } from "../utils/types.tsx";

export default function PokemonDetails() {
    const {pokemonName}: any = useParams();
    const [pokemonData, setPokemonData] = React.useState<pokemonType>({} as unknown as pokemonType);

    React.useEffect(() => {

        getPokemon();

        async function getPokemon() {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
            const results = await response.data;
            setPokemonData(results);
        }
    }, []);

    return (
        <>
            <NavBar />
            <Box component="section" 
                sx={{
                    display: "flex",
                    marginTop: 10,
                    marginLeft: 2
                }}>
                <Typography variant="h3" gutterBottom>
                    <b>{pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)} #{appendZero(pokemonData.id)}</b>
                </Typography>
            </Box>
            <Stack spacing={2}>
                <Stack direction="row" spacing={4}>
                    
                </Stack>
            </Stack>
        </>
    );
}