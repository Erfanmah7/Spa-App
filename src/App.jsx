import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Courses from "./pages/Courses";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products";
import Product from "./pages/Product";
import PageNotFound from "./pages/PageNotFound";
import Programmer from "./components/Programmer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/about-us" element={<AboutUs />}>
            <Route path="programmer" element={<Programmer />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
