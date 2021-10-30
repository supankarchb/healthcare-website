import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Courses from './components/Courses';
import Contracts from './components/Contracts';
import Homes from './components/Homes';
import About from './components/About/About';
import ShowingDoctorsData from './components/Doctors/ShowingDoctorsData';

function App() {
  return (
    <div className="App">
     
  <Router>
      <Switch>

      <Route path="/homes">

        <Homes></Homes>

      </Route>

        <Route path="/contracts">
         <Contracts></Contracts>
        </Route>

        <Route path="/about">

            <About></About>
        </Route>

        <Route path="/courses">
          <Courses></Courses>

        </Route>
        <Route path="/showingDoctorsData">
          <ShowingDoctorsData/>

        </Route>
        

      </Switch>
  </Router>

    </div>
  );
}

export default App;
