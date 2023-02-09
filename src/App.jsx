
import {Hero} from "./components/Home";
import { Categories } from "./components/Home";
import "./App.css";
import {Navbar} from './shared'

function App() {
 
  return (
    <div className="App">
      <Navbar></Navbar>
      
        <Hero></Hero>
        <Categories></Categories>
      
    </div>
  );
}

export default App;
