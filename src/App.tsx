import React, { useState } from 'react';
import './App.sass';
import List from './components/List';
import { IListItem, ItemFlagsEnum } from './constants';
import ItemDetails from './components/ItemDetails';
import { itemList } from './classes/Items.class';
import Filter from './components/Filter';
import uuid from 'uuid';

function App() {
  const [state, setState] = useState({
    selectedItem: {
      name: '',
      flags: new Array<ItemFlagsEnum>(),
      id: uuid()
    },
    itemList: [...itemList],
    itemList2: [...itemList]
  });

  const handeItemClick = (item: IListItem) => {
    setState({
      ...state,
      selectedItem: item
    });
  }

  const handleTextFilterChange = (newItems: IListItem[]) => {
    setState({ ...state, itemList: newItems });
  }

  const handleFlagFilterChange = (newItems: IListItem[]) => {
    setState({ ...state, itemList2: newItems });
  }

  return (
    <div className="App">
      <div className="left">
        <Filter
          items={state.itemList}
          pureItemList={itemList}
          sortEnable={true}
          textFilterEnable={true}
          onChangeFilter={handleTextFilterChange} />
        <List items={state.itemList}
          onItemClick={handeItemClick} 
          activeItem={state.selectedItem.id || ''} />
      </div>
      <ItemDetails selectedItem={state.selectedItem} />
      <div className="right">
        <Filter
          items={state.itemList2}
          iconFilterEnable={true}
          pureItemList={itemList}
          onChangeFilter={handleFlagFilterChange} />
        <List
          items={state.itemList2}
          onItemClick={handeItemClick}
          activeItem={state.selectedItem.id || ''} />
      </div>
    </div>
  );
}

export default App;
