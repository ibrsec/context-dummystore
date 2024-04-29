 
import Login from "../pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import Products from "../pages/Products";
import About from "../pages/About";
import Navbar from "../components/Navbar";


const AppRouter = () => {
  return (
    
    <BrowserRouter> 
    <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter;