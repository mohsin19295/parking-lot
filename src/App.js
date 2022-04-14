import React,{Component} from 'react';
import List from './components/List';
import 'bootstrap/dist/css/bootstrap.css';
import SlotInput from './components/SlotInput';
import Navbar from './components/Navbar';
import ExtendSlots from './components/ExtendSlots';
import {BrowserRouter , Route} from 'react-router-dom';

function App() {
  return (
  
  <BrowserRouter>
  <div className="App">
  	<Navbar/>
    <ExtendSlots/>
  	<Route  exact path='/'  component={List} />
  	<Route path='/add' component={SlotInput} />
  	<Route path='/list' component={List} />
  	</div>
  	</BrowserRouter>
  	
  	
  );
}

export default App;
