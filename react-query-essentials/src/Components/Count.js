import React from 'react'
import usePokemon from '../Hooks/usePokemon'

export default function Count() {

    const queryInfo = usePokemon()

    return (
        <div><h3>Number of Pokemons loaded {queryInfo.data?.length}</h3></div>
    )
}
