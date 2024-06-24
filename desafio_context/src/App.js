import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "../../desafio_context/src/pages/Home";
import Contato from "./pages/Contato";
import Portifolio from "./pages/Portifolio";
import Sobre from "./pages/Sobre";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/portifolio" element={<Portifolio />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
