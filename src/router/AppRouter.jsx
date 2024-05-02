import Login from "../pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import Products from "../pages/Products";
import About from "../pages/About";
import Navbar from "../components/Navbar";
import AuthProvider from "../context/AuthProvider";
import PrivateRouter from "../pages/PrivateRouter";
import ProductDetail from "../pages/ProductDetail";
import ProductsProvider from "../context/ProductsProvider";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ProductsProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<PrivateRouter />}>
              <Route path="home" element={<Home />} />
              <Route path="products" element={<Products />} />
              <Route path="products/:id" element={<ProductDetail />} />
              <Route path="about" element={<About />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ProductsProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default AppRouter;
