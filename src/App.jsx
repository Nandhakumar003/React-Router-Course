import "./App.css";
import About from "./components/About.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Product from "./components/Product/Product.jsx";
import ProductDetails from "./components/Product/ProductDetails.jsx";
import Layout from "./components/Layout.jsx";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/product">
              <Route index element={<Product />} />
              <Route path=":id" element={<ProductDetails />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
