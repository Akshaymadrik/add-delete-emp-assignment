
import './App.css';
import React from 'react';
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';
import AddEmp from './components/AddEmp';
import EditEmp from './components/EditEmp';
import NotFound from './components/NotFound';
import Home from './components/Home';
import Deletemp from './components/Deletemp';
function App() {
  return (
    <div className="App">
       <>
      
      <Router>
      <ul className="nav justify-content-center" style={{backgroundColor:"darkblue",color:"white"}}>
<li className="nav-item">
  <Link to="/" className="nav-link" >Home</Link>
</li>
<li className="nav-item">
<Link to="/addemp" className="nav-link" >AddEmp</Link>
</li>
<li className="nav-item">
<Link to="/editemp" className="nav-link" >EditEmp</Link>
</li>
<li className="nav-item">
<Link to="/deletemp" className="nav-link" >Deletemp</Link>
</li>
</ul>
     
    <Switch>
        <Route path="/" exact  component={Home}/>
        <Route path="/addemp" exact  component={AddEmp}/>
        <Route path="/editemp/:id" exact  component={EditEmp}/>
        <Route path="/deletemp" exact  component={Deletemp}/>
        <Route component={NotFound}/>
        </Switch>
      </Router>
    </>
    </div>
  );
}

export default App;
