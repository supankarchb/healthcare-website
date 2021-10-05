import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import NotFound from './components/NotFound';
import Courses from './components/Courses';
import Contract from './components/Contract';
import Abouts from './components/Abouts';
import Homes from './components/Homes';

function App() {
  return (
    <div className="App">
     
  <Router>
      <Switch>

      <Route path="/homes">

        <Homes></Homes>

      </Route>

        <Route path="/contract">
          <Contract></Contract>
        </Route>

        <Route path="/abouts">

            <Abouts></Abouts>
        </Route>

        <Route path="/courses">
          <Courses></Courses>

        </Route>
        <Route path="*">
          <NotFound></NotFound>


        </Route>

      </Switch>
  </Router>

    </div>
  );
}

export default App;
