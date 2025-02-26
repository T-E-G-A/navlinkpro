import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import Cardone from "./Cardone";
import Cardtwo from "./Cardtwo";
import Cardthree from "./Cardthree";
import Navbar from "./Navbar"; 
function App() {
  return (
    <div className="app">
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} >
          <Route path="products/cardone" element={<Cardone />} />
          <Route path="products/cardtwo" element={<Cardtwo />} />
          <Route path="products/cardthree" element={<Cardthree />} />
        </Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;