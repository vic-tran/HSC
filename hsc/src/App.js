import About from "./pages/About";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Returns from "./pages/Returns";
import Home from "./pages/Home.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  return (
  <Router>
    <Routes>
      <Route path ="/">
        <Home/>
      </Route>
    </Routes>
  </Router>
  
  )
};

export default App;