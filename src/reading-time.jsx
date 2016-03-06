import React from 'react'

export default class ReadingTime extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			readTime: 0
		}
	}

	componentWillMount() {
		this.updateReadingTime(this.props);
	}

	componentWillReceiveProps(nextProps) {
		this.updateReadingTime(nextProps);
	}

	updateReadingTime(props) {
		const words = this.countWords(props.text);
		const readTime = Math.round(words / props.wordsPerMinute);

		this.setState({ readTime });
	}

	countWords(text) {
		return text.split(" ").length
	}

	render() {
		return (
			<div>
				Estimated reading time: <br />
				<span>{this.state.readTime}</span>
			</div>
		)
	}
}

ReadingTime.propTypes = {
	wordsPerMinute: React.PropTypes.number
};

ReadingTime.defaultProps = {
	wordsPerMinute: 270
};