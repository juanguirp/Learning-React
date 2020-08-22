import React from 'react'
import ReactDOM from 'react-dom'

// Meet our test subject
const robertFromNY = {
    name: 'Robert Towers',
    city: 'New York City',
    age: 7
}

// Rendering simple elements:
const App1 = <h1>{getAnonymousThreatTo(robertFromNY)}</h1>

function getAnonymousThreatTo(person) {
    return `Hi ${person.name}! We know you are in ${person.city}... Expect Us!!!`
}
//ReactDOM.render(App1, document.getElementById('root'))


// Rendering a functional component:
const AnonymousThreat = (props) => (
    <div>
        <h2>Hi {props.name}!</h2>
        <p>We know you are in {props.city}...</p>
        <p>Expect Us!!!</p>
        <hr />
    </div>
)

const App2 = () => (
    <div>
        <AnonymousThreat
            name={robertFromNY.name}
            city={robertFromNY.city} />
        <AnonymousThreat></AnonymousThreat>
    </div>
)

ReactDOM.render(<App2 />, document.getElementById('root'))