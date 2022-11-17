import React from 'react';
import {useQuery } from 'react-query';
import axios from 'axios';

function App() {
  const queryInfo = useQuery('pokemon', async () => {
    // Make the api call wait for 2sec
    // await new Promise(resolve => setTimeout(resolve, 2000))
    return axios
      .get('https://pokeapi.co/api/v2/pokemon')
      .then(res => res.data.results)
  })
  
  
  return queryInfo.isLoading ?
    ('Loading.....')
    : (
      <div>{queryInfo.data.map(result => {
        return <div key={result.name}>{result.name}</div>
      })}</div>
    )
}

export default App;
