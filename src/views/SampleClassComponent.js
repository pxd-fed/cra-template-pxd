import React, { Component } from 'react';
import Button from '../components/Button';

class SampleClassComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			value: 0,
		};
	}

	// state를 constructor 밖으로 꺼낼 때.
	// state = {
	// 	value : 0
	// };

	onClick = () => {
		this.setState({
			value: this.state.value + 1,
		});
	};

	render() {
		return (
			<div>
				<p>value : {this.state.value}</p>
				<Button name={'버튼'} onClick={this.onClick}/>
			</div>
		);
	}

	componentDidMount() {
		console.log('componentDidMount');
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('componentDidUpdate');
	}
}

export default SampleClassComponent;