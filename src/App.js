import React, {Component} from "react";
import AddItem from "./component/AddItems/AddItem";
import TodoItems from "./component/TodoItems/TodoItem";
import "./index.css";

class App extends Component {
  state = {
    items : [

    ]
  }

  deleteItem = (id) => {
    let items = this.state.items.filter(item => {
      return item.id !== id;
    });
    this.setState({items:items})
  }

  addItem = (item) => {
    item.id = Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({items:items});
  }

  render() {
    return (
      <div className="App container">
        <h1 className="text-center">TodoList App</h1>
        <TodoItems items={this.state.items} deleteItem={this.deleteItem}/>
        <AddItem addItem={this.addItem}/>
      </div>
    );
  }
}

export default App;
