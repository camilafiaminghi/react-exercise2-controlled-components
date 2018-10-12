import React from 'react';

class RemoveShoppingItem extends React.Component {
  constructor(props) {
    super(props);
  }

  noItemsFound = () => {
    return this.props.items.length === 0;
  };
  
  render() {
    return (
		<button onClick={(event) => (this.props.deleteLastItem(event))} disabled={this.noItemsFound()}>
          Delete Last Item
        </button>
    );
  }
}

export default RemoveShoppingItem;