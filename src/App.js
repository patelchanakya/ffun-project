import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar";
import MasterVehicle from "./components/master-vehicle";
import EditVehicle from "./components/edit-vehicle";
import AddVehicle from "./components/add-vehicle";



function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <Route path="/" exact component={MasterVehicle} />
      <Route path="/edit/:id" component={EditVehicle} />
      <Route path="/add" exact component={AddVehicle} />

    </Router>
    

  );
}

export default App;
