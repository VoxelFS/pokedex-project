import React from "react";
import NavBar from "./Navbar.tsx";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Box, Divider, Stack, Typography } from "@mui/material";
import { appendZero } from "./Gallery.tsx";
import { pokemonSpecies, pokemonType } from "../utils/types.tsx";

export default function PokemonDetails() {
    const {pokemonName}: any = useParams();
    const temp: any = []
    const [pokemonData, setPokemonData] = React.useState<pokemonType>(temp);
    const [pokemonSpecies, setPokemonSpecies] = React.useState<pokemonSpecies>(temp);
    const [isLoading, setIsLoading] = React.useState<boolean>(true);

    React.useEffect(() => {

        getPokemon();

        async function getPokemon() {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
            const results = await response.data;
            setPokemonData(results);
            const response1 = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${results.id}`);
            const results1 = await response1.data;
            setPokemonSpecies(results1);
            setIsLoading(false);
        }

    }, []);

    if (isLoading) {
        return (
            <>
                <NavBar />
            </>
        );
    }

    return (
        <>
            <NavBar />
            <Box component="section" 
                sx={{
                    display: "flex",
                    marginTop: 13,
                    marginLeft: 2,
                    minWidth: "100vw"
                }}>
                <Typography variant="h3" gutterBottom>
                    #{appendZero(pokemonData.id)} - <b>{pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)} </b> 
                </Typography>
                
            </Box>
            <Divider textAlign="left" sx={{ minWidth: "98vw", marginLeft: 2, marginRight: 2 }}>{pokemonSpecies.genera[7].genus}</Divider>
            <Stack spacing={2}>
                <Stack direction="row" spacing={4}>
                    <Box sx={{
                        display: "flex",
                        backgroundColor: "white",
                        marginLeft: 2,
                        justifyContent: "center"
                    }}>
                        <Box 
                            component="img"
                            sx={{
                                height: 260
                            }}
                            alt={pokemonName}
                            src={pokemonData.sprites.front_default} 
                        />
                    </Box>
                </Stack>
            </Stack>
        </>
    );
}