/* TODO
Inside app.js, create a GroceryList component that contains an unordered 
list of 2 grocery items. Render this component to the div tag in index.html 
with an id of app
*/
var GroceryList = (props) => {
  var css = `
    .groceryList:hover {
	font-weight: bold;
	font-color: red;
	}
  `;
  return (
    <ul>
	  <style>
		  {css}
	  </style>	  
	  {
	  props.list.map((key, item) => (
			<GroceryListItem key={key} list={item} />
	  ))
	  }	
	</ul>
	);
};

var App = () => (
	<div>
		<h2>Grocery List</h2>
		<GroceryList list={['vegetables', 'grains', 'hot sauce']}/>
	</div>	
);

class GroceryListItem extends React.Component {
	constructor(props) {
	  super(props); 
	  this.state = {
		  done: false
	  };
	}
	onListItemClick() {
		this.setState({
			done: !this.state.done
		});
	}

	render() {
	  var style = {
		  textDecoration: this.state.done ? 'line-through' : 'none'
	  };  
	  return (
		<li key={this.props.key} className='groceryList' style={style} onClick={this.onListItemClick.bind(this)} >{this.props.list}</li>
	  );
	}
  };

ReactDOM.render(<App />, 
	document.getElementById('app'));