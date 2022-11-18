import React, { useState } from 'react'
import useSearchPokemon from "../Hooks/useSearchPokemon"

export default function SearchPokemon() {
    const [pokemon, setPokemon] = useState('');
    const queryInfo = useSearchPokemon(pokemon)
    return (
        <div>
            <input value={pokemon} type="text" onChange={e => setPokemon(e.target.value)} />
            <br />
            {
                queryInfo.isLoading ? ('Loading ....')
                    : queryInfo.isError ? queryInfo.error.message
                        : queryInfo.data?.sprites?.front_default ?
                            (
                                <div>
                                    <img src={queryInfo.data?.sprites?.front_default} alt="pokemon" />
                                </div>
                            ) : 'Pokemon not found'
            }

        </div>
    )
}
