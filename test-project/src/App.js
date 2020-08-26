import React, {Component} from 'react'

class Counter extends Component {
  state = {
    video: {
      title: 'titulo',
      likes: 0
    }
  }

  add = () => {
    this.setState((state) => ({
      video: {
        ...state.video,
        likes: state.video.likes + 1
      }
      }))
  }

  render(){
    return (
      <div>
      <h1>Titulo: {this.state.video.title}</h1>
        <button onClick={this.add}>
          Clicks: ({ this.state.video.likes })
        </button>
        </div>
      )
  }
}

const App = () => (
    <div>
      <Counter/>
    </div>
)

export default App