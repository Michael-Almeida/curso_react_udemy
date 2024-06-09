import "./App.css";

import { useState } from "react";

// 4 - custom hook

import { useFetch } from "./hooks/useFetch";

const url = "http://localhost:3000/products";
function App() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // 4 - custom hook
  const { data: items, httpConfig, loading, error, httpDelete } = useFetch(url);

  // Aula 1 - Resgatando dados
  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await fetch(url);

  //     const data = await res.json();

  //     setProducts(data);
  //   }
  //   fetchData();
  // }, []);

  //Aula 2 -Adição produtos
  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
    };

    //5 - Refatorando POST
    httpConfig(product, "POST");

    setName("");
    setPrice("");
  };

  // 8-deletar
  const handleRemove = (id) => {
    httpConfig(id, "DELETE");
  };
  return (
    <div className="App">
      <h1>Lista de produtos</h1>
      {/* 6 loading */}
      {loading && <p>Carregando dados...</p>}
      {error && <p>{error}</p>}
      {!error && (
        <ul>
          {items &&
            items.map((product) => (
              <li key={product.id}>
                {product.name} - R$: {product.price}
                <button onClick={() => handleRemove(product.id)}>
                  Excluir
                </button>
              </li>
            ))}
        </ul>
      )}
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:{" "}
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Preço:
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          {/* 7 -State loading */}
          {loading && <input type="submit" disabled value="Aguarde" />}
          {!loading && <input type="submit" value="Criar" />}
        </form>
      </div>
    </div>
  );
}

export default App;
