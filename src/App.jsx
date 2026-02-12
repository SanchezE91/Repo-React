import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NotFound from "./components/NotFound";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route
          path="/"
          element={<ItemListContainer mensaje="Bienvenidos a mi Tienda Online!" />}
        />

        <Route
          path="/category/:categoryId"
          element={<ItemListContainer mensaje="Bienvenidos a mi Tienda Online!" />}
        />

        <Route path="/item/:itemId" element={<ItemDetailContainer />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

