import React, { memo } from 'react';

const HabitAddForm = memo((props) => {
	const formRef = React.createRef();
	const inputRef = React.createRef();

	const onSubmit = (event) => {
		event.preventDefault();
		const name = inputRef.current.value;
		name && props.onAdd(name);
		// inputRef.current.value = '';
		formRef.current.reset();
	};

	console.log('HabitAddForm');

	return (
		<form className='add-form' onSubmit={onSubmit} ref={formRef}>
			<input
				ref={inputRef}
				type='text'
				placeholder='Habit'
				className='add-input'
			/>
			<button className='add-button'>Add</button>
		</form>
	);
});

export default HabitAddForm;
