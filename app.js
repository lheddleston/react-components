class GroceryListItem extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			done: false,
			hovered: false
		};
	}
	onListItemClick() {
		this.setState({
			done: !this.state.done
		});
	}
	onMouseOver() {
		this.setState({
			hovered: true
		})
	}
	onMouseOut() {
		this.setState({
			hovered: false
		})
	}
	render() {
		var css = {
			textDecoration: this.state.done ? 'line-through' : 'none',
			fontWeight: this.state.hovered ? 'bold' : 'normal'
		};
		return (
			<li style={css} onClick={this.onListItemClick.bind(this)} onMouseOut={this.onMouseOut.bind(this)}
				onMouseOver={this.onMouseOver.bind(this)}>{this.props.item}</li>
		);
	};
};
const GroceryListItems = (props) => (
	<ul>
		{props.list.map((item, index) => <GroceryListItem
			item={item} key={index} />
		)}
	</ul>

);
const GroceryList = () => (
	<div>
		<h1>Grocery List</h1>
		<GroceryListItems list={['Cucumbers', 'Tomatoes', 'Spinach', 'Sourdough Bread', 'Rice']} />
	</div>
);

ReactDOM.render(<GroceryList />, document.getElementById("app"));
