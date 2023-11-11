import React from "react";
import { Box, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";

interface Data {
    pokemonArray: any;
}

export default function Gallery({pokemonArray}: Data ) {

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

    function appendZero(id: number) {
        if (id < 10) {
            return "00" + id;
        } else if (id >= 10 && id < 100) {
            return "0" + id;
        } else if (id >= 100 && id < 1000) {
            return id;
        } else {
            return id;
        }
    }
    //use mui and card to create a gallery
    //stack and map the type arrays
    return (
        <> 
            <Box sx={{ marginTop: 5, marginBottom: 5, flexGrow: 1, marginLeft: "11vw" }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 9, md: 12 }}>
                    {pokemonArray.map((pokemon: any, index: number) => (
                    <Grid item xs={1} sm={2} md={3} key={index}>
                        <Card sx={{ minWidth: 250 }} >
                            <CardMedia sx={{ height: 260 }} 
                                image={pokemon.sprites.front_default}
                                title={pokemon.name}/>
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    #{appendZero(pokemon.id)}
                                </Typography>
                                <Typography gutterBottom variant="h5">
                                    <b>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</b>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    );
}