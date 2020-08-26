import React, {Component} from 'react'

class Counter extends Component {
  state = {
    clicks: 0
  }

  add = () => {
    this.setState({
      clicks: this.state.clicks + 1
    })
  }

  render(){
    return (
        <button onClick={this.add}>
          Clicks: ({ this.state.clicks })
        </button>
      )
  }
}

const App = () => (
    <div>
      <Counter/>
    </div>
)

export default App