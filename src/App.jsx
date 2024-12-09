import React, { useState, useEffect } from 'react';
import * as starshipService from './services/starshipService'
import StarshipSearch from './components/StarshipSearch';

const App = () => {
  
  const [shipInfo, setShipInfo] = useState([])
  const [allShips, setAllShips] = useState({})

useEffect (() => {
  const fetchAllStarShips= async () => {
    const data = await starshipService.AllStarships();
    setAllShips([data.page1Data, data.page2Data, data.page3Data, data.page4Data]);
  };
  fetchAllStarShips();
}, []);


  const fetchData = async (input) => {
    const data = await starshipService.show(input);
    // const newStarshipState = {
    //   name: data.results[0].name,
    //   class: data.results[0].starship_class,
    //   manufacturer: data.results[0].manufacturer,
    //   model: data.results[0].model
    // };
    // setShipInfo(newStarshipState);
  };
  // console.log(shipInfo)
  // console.log('State: ', shipInfo)

  return (
    <main>
      <h1>Star Wars API</h1>
     <StarshipSearch fetchData={fetchData} />
    </main>
  );
}

export default App
