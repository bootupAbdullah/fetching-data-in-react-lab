const BASE_URL = 'https://swapi.dev/api/starships';

const show = async (props) => {
    try {
        const queryString = `?search=${props}`;
        const res = await fetch(BASE_URL + queryString);
        // console.log(BASE_URL + queryString)
        const data = await res.json()
        // console.log(BASE_URL + queryString)
        // console.log('Data: ', data);
        return data;
    } catch (err) {
        console.log(err)
    }
}

const AllStarships = async () => {
    try {
        // Declare variables that contain page endpoints
        const page1Endpoint = '/?page=1';
        const page2Endpoint = '/?page=2';
        const page3Endpoint = '/?page=3';
        const page4Endpoint = '/?page=4';
        // Call each pae with specific endpoint and store in unique vars
        //Page 1 of 'Starships' results
        const starshipsPage1 = await fetch(BASE_URL + page1Endpoint );
        const page1Data = await starshipsPage1.json()
        console.log(page1Data)
        //Page 2 of 'Starships' results
        const starshipsPage2 = await fetch(BASE_URL + page2Endpoint );
        const page2Data = await starshipsPage2.json()
        console.log(page2Data)
        //Page 3 of 'Starships' results 
        const starshipsPage3 = await fetch(BASE_URL + page3Endpoint );
        const page3Data = await starshipsPage3.json()
        console.log(page3Data)
        //Page 4 of 'Starships' results
        const starshipsPage4 = await fetch(BASE_URL + page4Endpoint );
        const page4Data = await starshipsPage4.json()
        console.log(page4Data)
        return {page1Data, page2Data, page3Data, page4Data}
    } catch (err) {
        console.log('There is an error with loading Starship pages: ' + err)
    }
}

export {show, AllStarships}
















// import { useState } from 'react';

// const starshipService = () => {

// const BASE_URL = 'https://swapi.dev/api/starships/;'
// const [search, setSearch] = useState('');

// const handleChange =(event) => {
//     setCity(event.target.value)
//   }

// const handleSubmit = async (event) => {
//   event.preventDefault()
//   let response = await fetch(`${BASE_URL}`)
//   let jsonData = await response.json();
// 	console.log(jsonData)
    
    
    
//     return (
         
//         );
//   };





// }


// const starshipService = (props) => {
// return (

//         const handleSubmit = async (event) => {
//         event.preventDefault()
//         let response = await fetch(`${BASE_URL}`)
//         let jsonData = await response.json();
//           console.log(jsonData)
//     }
// )
// }




// export default handleSubmit



// const handleSubmit = async (event) => {
//     event.preventDefault()
//     let response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${YOUR_API_KEY}&q=${city}`)
//     let jsonData = await response.json();
//       console.log(jsonData)
  
//   setLocation(jsonData.location.name);
//   setTemperature(jsonData.current.temp_f);
//   setConditions(jsonData.current.condition.text);






















