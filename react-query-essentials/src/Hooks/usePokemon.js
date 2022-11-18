import { useQuery } from 'react-query';
import axios from 'axios';

export default function usePokemon() {
    return useQuery("pokemon", () => {
        return axios
            .get('https://pokeapi.co/api/v2/pokemon')
            .then(res => res.data.results)
    }, {
        // refetchOnWindowFocus: true,
        // staleTime: 2000
  })
}
