import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Stack, Typography } from "@mui/material";
import { pokemonType, type } from "../utils/types";

interface Data {
    pokemonArray: pokemonType[];
}

export function appendZero(id: number) {
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

    //use mui and card to create a gallery
    //stack and map the type arrays
    return (
        <> 
            <Box component="section" sx={{ marginTop: 5, marginBottom: 5, flexGrow: 1, marginLeft: 19 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 9, md: 12 }}>
                    {pokemonArray.map((pokemon: pokemonType, index: number) => (
                    <Grid item xs={1} sm={2} md={3} key={index}>
                        <Card sx={{ minWidth: 250 }} >
                            <CardMedia sx={{ height: 260 }} 
                                component="img"
                                image={pokemon.sprites.front_default}
                                title={pokemon.name}/>
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    #{appendZero(pokemon.id)}
                                </Typography>
                                <Typography gutterBottom variant="h5">
                                    <b>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</b>
                                </Typography>
                                <Stack direction="row" spacing={2} sx={{ display: "flex", justifyContent: "center" }}>
                                    {pokemon.types.map((type: type) => (
                                        <Box component="section" 
                                            sx={{ 
                                                display: "flex", 
                                                p: 2, 
                                                borderRadius: 3, 
                                                minWidth: 50, 
                                                maxHeight: 5, 
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
                            </CardContent>
                            <CardActions>
                                <Button size="small" onClick={() => window.open("/pokemon/" + pokemon.name, '_blank')}>Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    );
}