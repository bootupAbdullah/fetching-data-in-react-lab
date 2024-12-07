import React, { useState, useEffect } from 'react';
import * as starshipService from './services/starshipService'

const App = () => {

  const fetchData = async () => {
    const data = await starshipService.show('starships');
    console.log('Data: ', data);
  }

  return (
    <main>
      <h1>Star Wars API</h1>
      <button onClick={fetchData}>Fetch Starship Datat</button>
    </main>
  );
}

export default App
