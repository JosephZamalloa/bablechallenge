
import {Hero} from "./components/Home";
import { Categories } from "./components/Home";
import "./App.css";
import {Navbar} from './shared'

function App() {
 
  return (
    <div className="App">
      <Navbar></Navbar>
      <div>
        <Hero></Hero>
        <Categories></Categories>
      </div>
    </div>
  );
}

export default App;
