import { useState } from 'react';

const StarshipSearch = (props) => {
    const [starshipName, setStarshipName] = useState('')
    console.log('starshipName: ' + starshipName)
    
    const handleSubmit = async (event) => {
        console.log('handleSubmit:' + starshipName)
        event.preventDefault();
        await props.fetchData(starshipName)
        console.log('handleSubmit, post await: ' + starshipName)
        setStarshipName('')
    };

    return(
        <section>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Enter a Starship Name</label>
                <input 
                  id="name"
                  type="text"
                  value= {starshipName} 
                  onChange={(e) => setStarshipName(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
        </section>
    );
};

export default StarshipSearch