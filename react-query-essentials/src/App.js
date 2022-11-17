import React from 'react';
import {useQuery } from 'react-query';
import axios from 'axios';

function App() {
  const queryInfo = useQuery('pokemon', async () => {
    // Make the api call wait for 2sec
    // await new Promise(resolve => setTimeout(resolve, 2000))

    // Trowing an error here
    // if (true) {
    //   throw new Error('Test error')
    // }
    return axios
      .get('https://pokeapi.co/api/v2/pokemon')
      .then(res => res.data.results)
  }, {
    refetchOnWindowFocus: true,
    staleTime:2000
  })
  
  
  return queryInfo.isLoading ?
    ('Loading.....')
    : queryInfo.isError ? queryInfo.error.message
    : (
      <div>{queryInfo.data.map(result => {
        return <div key={result.name}>{result.name}</div>
      })}
        
          < br />
          { queryInfo.isFetching ? ("Updating...") : null}
        </div>

    )
}

export default App;
