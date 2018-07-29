class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.handleAddOne = this.handleAddOne.bind(this);
		this.handleMinusOne = this.handleMinusOne.bind(this);
		this.handleReset = this.handleReset.bind(this);
		this.state = {
			count: 0
		}
	}

	componentWillMount() {
		try {
			const json = localStorage.getItem('count');
			const count = parseInt(json, 10);
			
			if(	!isNaN(count)) {
				this.setState(() => ({count}));
			}
		} catch(e) {

		}
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.count !== this.state.count) {
			localStorage.setItem('count', this.state.count);
			console.log('update');
		}
	}

	handleAddOne() {
		this.setState((currentState) => {
			return {
				count: currentState.count + 1
			}
		})
	}
	handleMinusOne() {
		this.setState((currentState) => {
			return {
				count: currentState.count - 1
			}
		})
	}
	handleReset() {
		this.setState(() => {
			return {
				count: 0
			}
		})	
	}
	render() {
		return (
			<div>
				<h1>Count: {this.state.count}</h1>
				<button className="button" onClick={this.handleAddOne}>+1</button>
				<button className="button" onClick={this.handleMinusOne}>-1</button>
				<button className="button" onClick={this.handleReset}>reset</button>
			</div>
		);
	}
}

ReactDOM.render(<Counter count={1} />, document.getElementById('app'));

// let count = 0;
// const someid = 'my-id-here';
// const minusOne = () => {
// 	count--;
// 	renderCounterApp();
// 	console.log("minusOne");
// };
// const reset = () => {
// 	count = 0;
// 	renderCounterApp();
// 	console.log("reset");
// }
// const addOne = () => {
// 	count++;
// 	renderCounterApp();
// 	console.log('addOne');
// };



// const renderCounterApp = () => {
// 	const template2 = (
// // 	  <div>
// 	    <h1>Count: {count}</h1>
// 	    <button className="button" onClick={addOne}>+1</button>
// 	    <button className="button" onClick={minusOne}>-1</button>
// 	    <button className="button" onClick={reset}>reset</button>
// 	  // </div>
// 	);

// 	ReactDOM.render(template2, appRoot);
// };

// renderCounterApp();
