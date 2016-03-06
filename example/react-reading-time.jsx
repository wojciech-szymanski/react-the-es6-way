import React from 'react'
import ReactDOM from 'react-dom'
import ReadingTime from '../src/reading-time'

class ReactReadingTime extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
		}
	}

	updateText(ev) {
		this.setState({ text : ev.target.value });
	}

	render() {
		return (
			<div className='container' style={{ marginTop: '50px' }}>
				<div className='col-lg-8 col-lg-offset-2 form-group'>
					<textarea
						value={this.state.text}
						onChange={this.updateText.bind(this)}
						className='form-control'
						style={{ height: '500px', resize: 'none' }} />
				</div>
				<ReadingTime text={this.state.text} className='col-lg-12 well' />
			</div>
		)
	}
}

ReactDOM.render(<ReactReadingTime />, document.getElementById('react'))