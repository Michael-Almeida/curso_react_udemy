import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Product from "./pages/Product";
import Info from "./pages/Info";
import NotFound from "./pages/NotFound";
import SearchForm from "./components/SearchForm";
import Search from "./pages/Search";

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      {/* O que estiver à cima do browserRouter Serão repetidos em todas páginas */}
      <BrowserRouter>
        <Navbar />
        {/* O que tiver dentro de Routes irá sempre mudar */}
        {/* Seartch */}
        <SearchForm />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products/:id" element={<Product />} />
          {/* nested route */}
          <Route path="/products/:id/info" element={<Info />} />
          {/* Search */}
          <Route path="/search" element={<Search />} />
          {/* Redirect */}
          <Route path="/company" element={<Navigate to={"/about"} />} />
          {/* No math route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      {/* O que estiver à baixo do browserRouter Serão repetidos em todas páginas */}
    </div>
  );
}

export default App;
