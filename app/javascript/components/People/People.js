import React,{ useState, useEffect, Fragment } from 'react'
import axios from 'axios'

// People #index view of the app
const People = () => {
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

    console.log(JSON.stringify(people, null, 4));

    let people_text = JSON.stringify(people, null, 4);

    // const list = people.map( item => {
    //     return (<li key={item.attributes.name}>{item.attributes.name}</li>)
    // })
    //TODO: create an object model and create an array with all the objects
    return (
        <Fragment>
            <div> This is the People#index view of the app.</div>
            <div> {people_text} </div>
        </Fragment>
    )
}

export default People

// import React from 'react'
// import { Route, Switch } from 'react-router-dom'
// import People from './People/People'
// import Person from './Person/Person'
//
// const App = () => {
//     return (
//         <Switch>
//             <Route exact path="/" component={People}/>
//             <Route exact path="/people/:id" component={Person}/>
//         </Switch>
//     )
// }
//
// export default App