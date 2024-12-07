const BASE_URL = 'https://swapi.dev/api/';

const show = async (endpoint) => {
    try {
        const queryString = `${endpoint}`;
        const res = await fetch(BASE_URL + queryString);
        const data = await res.json()
        console.log('Data: ', data);
        return data;
    } catch (err) {
        console.log(err)
    }
}

export {show}
















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






















