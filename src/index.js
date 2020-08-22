import React from 'react'
import ReactDOM from 'react-dom'

// Meet our test subject
const robertFromNY = {
    name: 'Robert Towers',
    city: 'New York',
    age: 77
}

// => Rendering simple elements:
function getAnonymousThreatTo(person) {
    return `Hi ${person.name}! We know you are in ${person.city} city... Expect Us!!!`
}

const App1 = <h1>{getAnonymousThreatTo(robertFromNY)}</h1>

//ReactDOM.render(App1, document.getElementById('root'))


// => Rendering a functional component:
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

//ReactDOM.render(<App2 />, document.getElementById('root'))

// => Rendering a class component:
class AnonymousThreatComponent extends React.Component {
    constructor() {
        super()
        this.state = {
            remmainingTime: 1000
        }
    }

    render() {
        return (
            <div>
                <h1>We 'have class' and elegance:</h1>
                <h2>Hello Mr. {this.props.name}!</h2>
                <p>We go to your location in {this.props.city} city.</p>
                <p>Please wait for our arrival.</p>
                <button onClick={() => {
                    this.setState({
                        remmainingTime: this.state.remmainingTime - 5
                    })
                }}>Update remaining time</button>
                <p>Remaining time of arrival: {this.state.remmainingTime} seconds.</p>
                <hr />
            </div>
        )
    }
}

const App3 = () => (
    <div>
        <AnonymousThreatComponent
            name={robertFromNY.name}
            city={robertFromNY.city} />
    </div>
)

ReactDOM.render(<App3 />, document.getElementById('root'))