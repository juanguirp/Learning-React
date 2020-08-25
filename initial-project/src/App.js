import React from 'react'

import AnonymousThreat from './components/AnonymousThreat'
import AnonymousThreatComponent from './components/AnonymousThreatComponent'
import SimpleAnonymousThreatComponent from './components/SimpleAnonymousThreatComponent'

// Meet our test subject
const robertFromNY = {
    name: 'Robert Towers',
    city: 'New York',
    age: 77
}

// Expressions with JSX
function getAnonymousThreatTo(person) {
    return `Hi ${person.name}! We know you are in ${person.city} city... Expect Us!!!`
}
const App1 = <h1>{getAnonymousThreatTo(robertFromNY)}</h1>

// => All components
const App = () => (
    <div>
        <SimpleAnonymousThreatComponent
            name={robertFromNY.name}
            city={robertFromNY.city} />
        
        <SimpleAnonymousThreatComponent></SimpleAnonymousThreatComponent>

        <AnonymousThreatComponent
            name={robertFromNY.name}
            city={robertFromNY.city} />

        <AnonymousThreat
            name={robertFromNY.name}
            city={robertFromNY.city} />

        {App1}
    </div>
)

export default App