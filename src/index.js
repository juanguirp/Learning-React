import React from 'react'
import ReactDOM from 'react-dom'

const robertFromNY = {
    name: 'Robert Towers',
    city: 'New York City',
    age: 7
}

const App = <h1>{getAnonymousThreatTo(robertFromNY)}</h1>

function getAnonymousThreatTo(person) {
    return `Hi ${person.name}! We know you are in ${person.city}... Expect Us!!!`
}

ReactDOM.render(App, document.getElementById('root'))