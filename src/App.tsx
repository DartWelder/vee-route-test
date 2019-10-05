import React, { useState } from 'react';
import './App.sass';
import List from './components/List';
import { IListItem, ItemFlagsEnum } from './constants';
import ItemDetails from './components/ItemDetails';
import { Items, itemList } from './Items.class';
import Filter from './components/Filter';

function App() {
  const [state, setState] = useState({
    selectedItem: {
      name: '', flags: new Array<ItemFlagsEnum>()
    },
    itemList: itemList,
  })
  const handeItemClick = (item: IListItem) => {
    setState({
      ...state,
      selectedItem: item
    });
  }

  const onChangeFilter = () => {
    setState({ ...state, itemList: state.itemList }); 
  }

  return (
    <div className="App">
      <div className="left">
        {/* <Filter items={state.itemList} sortEnable={true} onChangeFilter={onChangeFilter} /> */}
        <List items={state.itemList} onItemClick={handeItemClick}></List>
      </div>
      <ItemDetails selectedItem={state.selectedItem} />
      <div className="right">
        {/* <Filter items={state.itemList} sortEnable={true} onChangeFilter={onChangeFilter} /> */}
        <List items={state.itemList} onItemClick={handeItemClick}></List>
      </div>
    </div>
  );
}

export default App;
