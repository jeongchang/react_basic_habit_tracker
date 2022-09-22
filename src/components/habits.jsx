import React, { Component } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';

class Habits extends Component {
	handleIncreament = (habit) => {
		this.props.onIncrement(habit);
	};

	handleDecreament = (habit) => {
		this.props.onDecreament(habit);
	};

	handleDelete = (habit) => {
		this.props.onDelete(habit);
	};

	handleAdd = (name) => {
		this.props.onAdd(name);
	};

	render() {
		console.log('habits.jsx');
		return (
			<>
				<HabitAddForm onAdd={this.handleAdd} />
				<ul>
					{this.props.habits.map((habit) => (
						<Habit
							key={habit.id}
							habit={habit}
							onIncrement={this.handleIncreament}
							onDecreament={this.handleDecreament}
							onDelete={this.handleDelete}
						/>
					))}
				</ul>
				<button className='habits-reset' onClick={this.props.onReset}>
					Reset All
				</button>
			</>
		);
	}
}

export default Habits;
