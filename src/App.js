import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Courses from './components/Courses';
import Contracts from './components/Contracts';
import Homes from './components/Homes';
import About from './components/About/About';
import ShowingDoctorsData from './components/Doctors/ShowingDoctorsData';
import Login from './components/Login/Login';
import initializeAuthentication from './components/Firebase/firebase.initialize';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AuthProvider from './components/Context/AuthProvider';
import Details from './components/Details/Details';
import Register from './components/Register/Register';
import NotFound from './components/NotFound/NotFound';
initializeAuthentication();
function App() {
  return (
    <div className="App">
     <AuthProvider>
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

        <PrivateRoute path="/courses">
          <Courses></Courses>

        </PrivateRoute>
        <PrivateRoute path="/showingDoctorsData">
          <ShowingDoctorsData></ShowingDoctorsData>

        </PrivateRoute>
        
        <Route path="/login">
          <Login/>

        </Route>
        <Route path="/register">
          <Register/>

        </Route>

      <PrivateRoute path="/details/:serviceId">

          <Details></Details>

      </PrivateRoute>
      <Route path="*">
          <NotFound></NotFound>


        </Route>
     
      

      </Switch>
  </Router>
  </AuthProvider>

    </div>
  );
}

export default App;
