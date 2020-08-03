import React, { Component } from 'react';

import './App.css';
import './reset.css';
import Menu from './Components/Menu';
import Search from './Components/Search';
import Home from './Components/Home';
import Display from './Components/Display';
import DetailBook from './Components/DetailBook';
import Cart from './Components/Cart';
import Book from './Components/Book';
import Admin from './Components/Admin'
import {Switch,
   Route} from 'react-router-dom'



class App extends Component{
  constructor(props){
    super(props);
  }

  render(){
  return (
    <div className="App">
      <Menu/>
      {/* <Search/> */}

      <Switch>

        <Route path='/Admin'>
        <Admin/>
        </Route>

        <Route path='/Cart'>
        <Cart />
        </Route>

        <Route path='/Display'>
          <Display/>
        </Route>
        <Route path='/Book'>
          <Book/>
        </Route>

        {/* <Route path='/DetailBook'>
          <DetailBook/>
        </Route> */}

        <Route path='/'>
        <Home/>
        </Route>

      </Switch>
      
    </div>
  );
}
}

export default App;
