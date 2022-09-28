

import Home from "./pages/Home";
import Solutions from "./pages/Solutions";
import About from "./pages/About";

import{
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/solutions" element={<Solutions/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
