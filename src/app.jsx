import './app.css';
import React, { Component } from 'react';
import Habits from './components/habits';
import Navbar from './components/navbar';

class App extends Component {
	state = {
		habits: [
			{ id: 1, name: 'Reading', count: 0 },
			{ id: 2, name: 'Running', count: 0 },
			{ id: 3, name: 'Coding', count: 0 },
		],
	};

	handleIncreament = (habit) => {
		// const habits = [...this.state.habits];
		// const index = habits.indexOf(habit);
		// habits[index].count++;
		const habits = this.state.habits.map((item) => {
			if (item.id === habit.id) {
				return { ...habit, count: habit.count + 1 };
			}
			return item;
		});
		this.setState({ habits });
	};

	handleDecreament = (habit) => {
		// const habits = [...this.state.habits];
		// const index = habits.indexOf(habit);
		// const count = habits[index].count - 1;
		// habits[index].count = count < 0 ? 0 : count;
		const habits = this.state.habits.map((item) => {
			if (item.id === habit.id) {
				const count = habit.count - 1;
				return { ...habit, count: count < 0 ? 0 : count };
			}
			return item;
		});
		this.setState({ habits });
	};

	handleDelete = (habit) => {
		// const habits = [...this.state.habits];
		// const index = habits.indexOf(habit);
		// habits.splice(index, 1);
		const habits = this.state.habits.filter((item) => item.id !== habit.id);
		this.setState({ habits });
	};

	handleAdd = (name) => {
		// const habits = [...this.state.habits];
		// const habit = {
		// 	id: habits[habits.length - 1].id + 1,
		// 	name: name,
		// 	count: 0,
		// };
		// habits.push(habit);
		// this.setState({ habits });

		const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }];
		this.setState({ habits });
	};

	handleReset = () => {
		// const habits = [...this.state.habits];
		// habits.forEach(function (d, i) {
		// 	d.count = 0;
		// });
		// this.setState({ habits });

		// const habits = this.state.habits.map((habit) => {
		// 	habit.count = 0;
		// 	return habit;
		// });

		const habits = this.state.habits.map((habit) => {
			if (habit.count !== 0) {
				return { ...habit, count: 0 };
			}
			return habit;
		});

		this.setState({ habits });
	};

	render() {
		console.log('app.jsx');
		return (
			<>
				<Navbar
					totalCount={this.state.habits.filter((item) => item.count > 0).length}
				/>
				<Habits
					habits={this.state.habits}
					onIncrement={this.handleIncreament}
					onDecreament={this.handleDecreament}
					onDelete={this.handleDelete}
					onAdd={this.handleAdd}
					onReset={this.handleReset}
				/>
			</>
		);
	}
}

export default App;
