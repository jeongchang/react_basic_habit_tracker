import React, { PureComponent } from 'react';

class Habit extends PureComponent {
	handleIncreament = () => {
		this.props.onIncrement(this.props.habit);
	};

	handleDecreament = () => {
		this.props.onDecreament(this.props.habit);
	};

	handleDelete = () => {
		this.props.onDelete(this.props.habit);
	};

	render() {
		const { name, count } = this.props.habit;

		console.log('habit.jsx : ' + name);
		return (
			<li className='habit'>
				<span className='habit-name'>{name}</span>
				<span className='habit-count'>{count}</span>
				<button
					className='habit-button habit-increase'
					onClick={this.handleIncreament}
				>
					+<i className='fa-solid fa-square-plus'></i>
				</button>
				<button
					className='habit-button habit-decrease'
					onClick={this.handleDecreament}
				>
					-<i className='fas fa-minus-square'></i>
				</button>
				<button
					className='habit-button habit-delete'
					onClick={this.handleDelete}
				>
					remove
					<i className='fas fa-trash'></i>
				</button>
			</li>
		);
	}
}

export default Habit;
