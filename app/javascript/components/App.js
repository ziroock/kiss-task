import React,{ useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import Table from './Table'

const App = () => {
    const [people, setPeople] = useState([])

    useEffect(() => {
        //Get all people from api
        //Update people in the state
        axios.get('api/v1/people.json')
            .then( resp => {
                setPeople(resp.data.data);
            })
            .catch( resp => console.log(resp) );

    }, [people.length]); //only re-run effect if count changes
    //get all attributes data
    let peopleObject = [];
    try {
        for(let i = 0; i < people.length; i++) {
            let personObject = people[i].attributes;
            peopleObject.push(personObject);
        }
    } catch(err) {
        console.log(err.message)
    }

    return (
        <Table data={peopleObject}/>
    )
}

export default App