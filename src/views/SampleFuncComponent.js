import React, { useState, useEffect } from 'react';
import Button from '../components/Button';

const SampleFuncComponent = () => {
	const [value, setValue] = useState(0);

	useEffect(() => {
		console.log('렌더링 완료');
	});

	// useEffect(() => {
	// 	console.log('마운트 될때만 실행');
	// }, []);

	// useEffect(() => {
	// 	console.log('특정 값이 업데이트될 때만 실행');
	// }, [value]);

	// useEffect(() => {
	// 	console.log('렌더링 완료');
	// 	 () => {
	// 		console.log('언마운트 되기 전이나 업데이트 되기 직전에 실행');
	// 	}
	// });

	const onClick = () => {
		setValue(value + 1);
	};

	return (
		<div>
			<p>value : {value}</p>
			<Button name={'버튼'} onClick={onClick}/>
		</div>
	);
};

export default SampleFuncComponent;