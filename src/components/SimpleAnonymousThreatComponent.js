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
        return (
            <div>
                <h1>We 'have class' and simplicity:</h1>
                <h2>Hello Mr. {this.props.name}!</h2>
                <p>We go to your location in {this.props.city} city.</p>
                <p>Please wait for our arrival.</p>
                <button onClick={this.updateRemainingTime}>Update remaining time</button>
                <p>Remaining time of arrival: {this.state.remmainingTime} seconds.</p>
                <hr />
            </div>
        )
    }
}

export default SimpleAnonymousThreatComponent