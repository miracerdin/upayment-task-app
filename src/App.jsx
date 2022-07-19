import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetail from "./pages/ProductDetail";
import Create from "./pages/Create";

function App() {
  return (
    <BrowserRouter className="text-3xl font-bold underline">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productdetail" element={<ProductDetail />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
