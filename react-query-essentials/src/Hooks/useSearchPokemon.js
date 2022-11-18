import { useQuery } from 'react-query';
import axios from 'axios';

export default function useSearchPokemon(pokemon) {
    return useQuery([pokemon], () => {
        return axios
            .get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
            .then(res => res.data)
    }, {
        // refetchOnWindowFocus: true,
        // staleTime: 2000
    })
}
