// TODO
console.log('hello world')

var GroceryList = () => (
  <div>
    <h2>Grocery List:</h2>
    <GroceryListItems items={['Watermelon', 'Crushed Lemons', 'Already sipped gatorade']}/>
  </div>
);

var GroceryListItems = (props) => (
  <ul>
    <li>{props.items[0]}</li>
    <li>{props.items[1]}</li>
    <li>{props.items[2]}</li>
 </ul>
)

ReactDOM.render(<GroceryList />, document.getElementById("app"));