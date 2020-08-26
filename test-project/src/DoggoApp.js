import React, {Component} from 'react'

const Dog = (props) => (
	<div>
		<h1>I'm a dogo 🐕</h1>
		<pre>
			{JSON.stringify(props, null, 4)}
		</pre>	
	</div>
)

class App extends Component {
	state = {
		softness: 5,
		evoldoing: 0
	}
	render(){
		const moreStuffAboutDoggo = {
			nailColor: 'purple',
			barksPerHour: 472
		}

		return (
			<div>
				<Dog
				name='Leilonguis'
				age='3 years'
				color='pink'
				// moreStuff={moreStuffAboutDoggo} // Nope!
				// nailColor={moreStuffAboutDoggo.nailColor} // No! Please NOOOO!!!
				// Beautiful:
				{ ...moreStuffAboutDoggo }
				{ ...this.state }
				/>
			</div>
		)
	}
}
export default App