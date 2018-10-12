import React from 'react';
import ShoppingItemsList from './ShoppingItemsList';
import CreateShoppingItem from './CreateShoppingItem';
import RemoveShoppingItem from './RemoveShoppingItem';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    items: [],
  };

  updateItem = (value) => {
    this.setState(oldState => ({
      items: [...oldState.items, value],
    }));
  }

  deleteLastItem = (event) => {
    this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>Shopping List</h2>
        <CreateShoppingItem 
    		updateItem={this.updateItem} />
		<RemoveShoppingItem 
			deleteLastItem={this.deleteLastItem} 
			items={this.state.items} />
        <p className="items">Items</p>
		<ShoppingItemsList 
			items={this.state.items} />
      </div>
    );
  }
}

export default App;
