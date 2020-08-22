import React from 'react'

// Standard class component
class AnonymousThreatComponent extends React.Component {
    constructor() {
        super()

        // 'this' in js is lovely 
        //this.updateRemainingTime = this.updateRemainingTime.bind(this)
        // make this for every method ... omg ...

        // A better way to bind 'this' to each method
        const METHODS = [
            'updateRemainingTime',
        ]

        METHODS.forEach(
            (method) => { this[method] = this[method].bind(this) }
        )

        // States!!!
        this.state = {
            remmainingTime: 1000
        }
    }

    updateRemainingTime() {
        this.setState({
            remmainingTime: this.state.remmainingTime - 5
        })
    }

    render() {
        const styles = {
            border: '1px solid black',
            marginBottom: '1em',
            borderRadius: '0.5em',
            padding: '1em',
            background: 'linear-gradient(45deg, mediumslateblue, darkorchid)',
            color: 'white'
        }
        return (
            <div style={styles}>
                <h1>We 'have class' and elegance:</h1>
                <h2>Hello Mr. {this.props.name}!</h2>
                <p>We go to your location in {this.props.city} city.</p>
                <p>Please wait for our arrival.</p>
                <button onClick={this.updateRemainingTime}>Update remaining time</button>
                <p>Remaining time of arrival: {this.state.remmainingTime} seconds.</p>
            </div>
        )
    }
}

export default AnonymousThreatComponent