import React from "react";
import axios from "axios";
import InfiniteScroll from 'react-infinite-scroller';

interface Parameters {
    searchTerm: string;
    primaryType: string;
    secondaryType: string;
    generation: string;
}

export default function Gallery(parameters: Parameters) {

    const result: JSON[] = []
    const [data, setData] = React.useState(result);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    const [hasMore, setHasMore] = React.useState(false);
    const [url, setURL] = React.useState("");

    React.useEffect(() => {
        setData(result)
    }, [parameters.searchTerm, parameters.generation, parameters.primaryType, parameters.secondaryType])

    React.useEffect(() => {
        setLoading(true)
        setError(false)
        axios({
            method: 'GET',
            url: 'https://pokeapi.co/api/v2/pokemon'
        }).then(res => {
            setData([...data, ...res.data.results]);
            console.log(res.data.results);
            setURL(res.data.next);
            setHasMore(res.data.count > 0);
            setLoading(false);
        })
    }, [])

    function getData() {
        setLoading(true)
        setError(false)
        axios({
            method: 'GET',
            url: `${url}`
        }).then(res => {
            setData([...data, ...res.data.results]);
            setURL(res.data.next)
            setHasMore(res.data.count > 0);
            setLoading(false)
        })
    }


    return (
        <>
            {data.map((pokemon) => (
                <p>{pokemon.name}</p>
            ))}
        </>
    );
}