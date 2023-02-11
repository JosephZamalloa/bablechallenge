import { Hero } from "./components/Home";
import { Categories } from "./components/Home";
import "./App.css";
import { Navbar } from "./shared";
import { Footer } from "./shared";
import { CategoryBar } from "./components/Home";
import  MainLayout  from "./Layout/MainLayout";
import Home from "./pages/Home";
function App() {
  return (
    <div className="App">
      <MainLayout>
        <Home></Home>
       
      </MainLayout>
    </div>
  );
}

export default App;
