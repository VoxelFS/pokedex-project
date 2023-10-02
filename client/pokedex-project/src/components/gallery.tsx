import React from "react";
import axios from "axios";
import InfiniteScroll from 'react-infinite-scroller';

interface Parameters {
    searchTerm: string;
    primaryType: string;
    secondaryType: string;
    generation: string;
}

export default function Gallery({searchTerm, primaryType, secondaryType, generation}: Parameters ) {

    console.log(searchTerm);
    console.log(primaryType);
    console.log(secondaryType);
    console.log(generation);

    const result: JSON[] = []
    const [data, setData] = React.useState(result);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    const [hasMore, setHasMore] = React.useState(true);
    const [offset, setOffset] = React.useState(0);
    const [pokemonData, setPokemonData] = React.useState(result);
    const [show, setShow] = React.useState(true);


    React.useEffect(() => {
        setShow(false);
        setData(result);
        setOffset(0);
    }, [searchTerm, generation, primaryType, secondaryType]);

    //second useeffect here that changes depending on the params and etc. 
    //this useeffect will grab the list of ALL 1010 pokemon and will sort them based on the param
    // create functions in here that will sort them

    React.useEffect(() => {
        setShow(true);
    }, [searchTerm === "", generation === "", primaryType === "", secondaryType === ""]);

    async function temp() {
        setLoading(true);
        setError(false);
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${20}`);
        const result = await response.data
        setData([...data, ...result.results]);
        setOffset(offset + 20);
        setHasMore(result.count > 0);
        setLoading(false);
    }

    async function fetchPokemonData(pokemon: any) {
        const response = await axios.get(pokemon.url);
        const result= await response.data;

    }

    //infinite scroll here. 
    //use mui and card to create a gallery
    return (
        <> 
        {show && (
            <InfiniteScroll 
                pageStart={0}
                loadMore={temp}
                hasMore={hasMore}
                loader={
                    <div className="loader" key="loader">
                        Loading...
                    </div>
                }
            >
            {data.map((pokemon: any) => (
                <p>{pokemon.name}</p>
            ))}
            </InfiniteScroll>
        )}
        </>
    );
}