import React from 'react';
import usePokemon from './Hooks/usePokemon';

function App() {
  const queryInfo = usePokemon();
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
