// TODO
console.log('hello world')

class GroceryList extends React.Component {
  // A `constructor` method is expected on all ES6 classes
  // When React instantiates the component,
  // it will pass `props` to the constructor
  constructor(props) {
    // Equivalent to ES5's React.Component.call(this, props)
    super(props);
  }
  // Every class component must have a `render` method
  // Stateless functional components are pretty much just this method

  render() {

    // `props` is no longer passed as an argument,
    // but instead accessed with `this.props`
    return (
    <div>
     <h2>Grocery List:</h2>
      <GroceryListItems items={['Watermelon', 'Pre-Crushed Lemons', 'Once-Sipped Gatorade']}/>
    </div>
    );
  }
};

var GroceryListItems = (props) => (
  <ul>
    <li>{props.items[0]}</li>
    <li>{props.items[1]}</li>
    <li>{props.items[2]}</li>
 </ul>
)

ReactDOM.render(<GroceryList />, document.getElementById("app"));

