import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import ItemList from './pages/ItemList'
import ItemList2 from './pages/ItemList2'
import ItemList3 from './pages/ItemList3'
import ItemDetail from './pages/itemDetail'
import ItemDetail2 from './pages/itemDetail2'
import ItemDetail3 from './pages/itemDetail3'
import ItemDetail4 from './pages/itemDetail4'
import ItemDetail5 from './pages/itemDetail5'
import ItemDetail6 from './pages/itemDetail6'
import ItemDetail7 from './pages/itemDetail7'
import ItemDetail8 from './pages/itemDetail8'

const ItemIndex = () => {
  return (
    <>
      <Route path="/item-list" component={ItemList} />
      <Route path="/item-list2" component={ItemList2} />
      <Route path="/item-list3" component={ItemList3} />
      <Route path="/item-detail" component={ItemDetail} />
      <Route path="/item-detail2" component={ItemDetail2} />
      <Route path="/item-detail3" component={ItemDetail3} />
      <Route path="/item-detail4" component={ItemDetail4} />
      <Route path="/item-detail5" component={ItemDetail5} />
      <Route path="/item-detail6" component={ItemDetail6} />
      <Route path="/item-detail7" component={ItemDetail7} />
      <Route path="/item-detail8" component={ItemDetail8} />
    </>
  )
}

export default ItemIndex
