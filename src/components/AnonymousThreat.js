import React from 'react'

// Functional component
const AnonymousThreat = (props) => (
    <div>
        <h2>Hi {props.name}!</h2>
        <p>We know you are in {props.city}...</p>
        <p>Expect Us!!!</p>
        <hr />
    </div>
)

export default AnonymousThreat