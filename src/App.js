import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Contracts from './components/Contracts';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">

      <Header> </Header>
      <Contracts/>
      <Footer></Footer>
    </div>
  );
}

export default App;
