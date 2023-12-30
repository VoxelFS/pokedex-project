import React from "react";
import NavBar from "./Navbar.tsx";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Box, Divider, Grid, Stack, Tooltip, Typography } from "@mui/material";
import { appendZero } from "./Gallery.tsx";
import { ability, pokemonSpecies, pokemonType, type } from "../utils/types.tsx";
import { VisibilityOff } from "@mui/icons-material";
import ScaleIcon from '@mui/icons-material/Scale';
import HeightIcon from '@mui/icons-material/Height';

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

    const colours = {
        normal: '#A8A77A',
        fire: '#EE8130',
        water: '#6390F0',
        electric: '#F7D02C',
        grass: '#7AC74C',
        ice: '#96D9D6',
        fighting: '#C22E28',
        poison: '#A33EA1',
        ground: '#E2BF65',
        flying: '#A98FF3',
        psychic: '#F95587',
        bug: '#A6B91A',
        rock: '#B6A136',
        ghost: '#735797',
        dragon: '#6F35FC',
        dark: '#705746',
        steel: '#B7B7CE',
        fairy: '#D685AD',
    };

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
            <Divider textAlign="left" sx={{ minWidth: "98vw", marginLeft: 2, marginRight: 2, marginBottom: 4 }}>{pokemonSpecies.genera[7].genus}</Divider>
            <Grid container spacing={4}>
                <Grid item xs={4}>
                    <Box sx={{
                        display: "flex",
                        backgroundColor: "white",
                        marginLeft: 2,
                        justifyContent: "center",
                        borderRadius: 3
                    }}>
                        <Box 
                            component="img"
                            sx={{
                                height: 300
                            }}
                            alt={pokemonName}
                            src={pokemonData.sprites.front_default} 
                        />
                    </Box>
                </Grid>
                <Grid item xs={2}>
                    <Box sx={{
                        textAlign: "left"
                    }}>
                        <Typography variant="h6" gutterBottom>
                            Type
                        </Typography>
                        <Divider sx={{ marginBottom: 2 }}/>
                        <Stack spacing={1}>
                            {pokemonData.types.map((type: type) => (
                                <Box component="section" 
                                    sx={{ 
                                        display: "flex", 
                                        p: 2, 
                                        borderRadius: 3, 
                                        maxHeight: 2, 
                                        alignItems: "center", 
                                        justifyContent: "center",
                                    }} 
                                    bgcolor={colours[type.type.name]} >
                                    <Typography variant="body2" sx={{ color: "white" }}>
                                        <b>{type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}</b>
                                    </Typography>
                                </Box>
                            ))}
                        </Stack>
                        <Typography variant="h6" gutterBottom sx={{ marginTop: 3 }}>
                            Abilities
                        </Typography>
                        <Divider sx={{ marginBottom: 2 }}/>
                        <Stack spacing={1}>
                            {pokemonData.abilities.map((abilities: ability) => (
                                <Box component="section" sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    backgroundColor: "white",
                                    borderRadius: 3,
                                    justifyContent: "center",
                                    p: 2,
                                    maxHeight: 2
                                }}>
                                    {abilities.is_hidden ? 
                                    <>
                                        <Typography variant="body2" sx={{ color: "black", position: "absolute" }}>
                                            <b>{abilities.ability.name.charAt(0).toUpperCase() + abilities.ability.name.slice(1)}</b>
                                        </Typography>
                                        <Tooltip title="Hidden Ability" arrow>
                                            <VisibilityOff sx={{ color: "black", position: "relative", left: 75 }}/>
                                        </Tooltip>
                                    </> :
                                    <Typography variant="body2" sx={{ color: "black" }}>
                                        <b>{abilities.ability.name.charAt(0).toUpperCase() + abilities.ability.name.slice(1)}</b>
                                    </Typography> }
                                </Box>
                            ))}
                        </Stack>
                    </Box>
                </Grid>
                <Grid item xs={3}>
                    <Box sx={{ 
                        textAlign: "left"
                    }}>
                        <Typography variant="h6" gutterBottom>
                            Weight & Height
                        </Typography>
                        <Divider sx={{ marginBottom: 2 }}/>
                    </Box>
                    <Stack spacing={1}>
                        <Box component="section" sx={{
                            display: "flex",
                            backgroundColor: "white",
                            borderRadius: 3,
                            justifyContent: "left",
                            p: 2,
                            maxHeight: 2,
                            alignItems: "center"
                        }}>
                            <ScaleIcon sx={{ color: "black" }}/>
                            <Typography variant="body2" sx={{ color: "black" }}>
                                <b>Weight:</b> {pokemonData.weight / 10} kg
                            </Typography>
                        </Box>
                        <Box component="section" sx={{
                            display: "flex",
                            backgroundColor: "white",
                            borderRadius: 3,
                            justifyContent: "left",
                            p: 2,
                            maxHeight: 2,
                            alignItems: "center"
                        }}>
                            <HeightIcon sx={{ color: "black" }} />
                            <Typography variant="body2" sx={{ color: "black" }}>
                                <b>Height:</b> {pokemonData.height / 10} m 
                            </Typography>
                        </Box>
                    </Stack>
                    <Typography variant="h6" gutterBottom sx={{ marginTop: 3 }}>
                        Pokedex Entry
                    </Typography>
                    <Divider sx={{ marginBottom: 2 }}/>
                    <Box component="section" sx={{
                            display: "flex",
                            backgroundColor: "white",
                            borderRadius: 3,
                            justifyContent: "left",
                            p: 1,
                            alignItems: "center"
                    }}>
                        <Typography variant="body2" gutterBottom sx={{ color: "black" }}>
                            {pokemonSpecies.flavor_text_entries[6].flavor_text}
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}