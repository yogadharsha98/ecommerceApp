import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Product from "./components/Product";
import Dashboard from "./components/Dashboard";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/products" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
