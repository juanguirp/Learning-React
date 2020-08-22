import React from 'react'

// Non-standard... class component with property initializers
class SimpleAnonymousThreatComponent extends React.Component {
    state = {
        remmainingTime: 1000
    }

    updateRemainingTime = () => this.setState({
        remmainingTime: this.state.remmainingTime - 5
    })


    render() {

        const hasTimeToRun = this.state.remmainingTime > 980

        const styles = {
            border: '1px solid black',
            marginBottom: '1em',
            borderRadius: '0.5em',
            padding: '1em',
            background: hasTimeToRun ? 'linear-gradient(45deg, green, forestgreen)': 'linear-gradient(45deg, red, orange)',
            color:  hasTimeToRun ? 'white': 'yellow',
            transition: 'all 450ms ease-out'
        }

        return (
            <div style={styles}>
                <h1>We 'have class' and simplicity:</h1>
                <h2>Hello Mr. {this.props.name}!</h2>
                <p>We go to your location in {this.props.city} city.</p>
                <p>Please wait for our arrival.</p>
                <button onClick={this.updateRemainingTime}>Update remaining time</button>
                <p>Remaining time of arrival: {this.state.remmainingTime} seconds.</p>
            </div>
        )
    }
}

export default SimpleAnonymousThreatComponent