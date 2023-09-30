import React from "react";
import axios from "axios";

interface Parameters {
    searchTerm: string;
    primaryType: string;
    secondaryType: string;
    generation: string;
}

export default function Gallery(parameters: Parameters) {

    const [data, setData] = React.useState([]);

    if (parameters.searchTerm === "" && parameters.primaryType === "" && parameters.secondaryType === "" && parameters.generation === "") {
        getData();
        function getData() {
            axios({
                method: 'GET',
                url: 'https://pokeapi.co/api/v2/pokemon'
            }).then(res => {
                setData(res.data)
            })
        }
    }

    return (
        <>
        </>
    );
}