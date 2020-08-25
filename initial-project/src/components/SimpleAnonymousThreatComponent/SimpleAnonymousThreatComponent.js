import React from 'react'
import styles from './SimpleAnonymousThreatComponent.module.css'

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

        const tooLateToRun = hasTimeToRun ? '' : styles['card-late']

        const classes = `${styles['card-run']} ${tooLateToRun}`

        return (
            <div className={classes}>
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