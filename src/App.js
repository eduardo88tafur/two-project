import { UseState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Inicio from "./paginas/Inicio";
import EditarCliente from "./paginas/EditarCliente";
import NuevoCliente from "./paginas/NuevoCliente";
import VerCliente from "./components/VerCliente"
function App() {
  return (
    <div>
      <BrowserRouter>
         <Routes> 
            <Route path="/clientes" element={<Layout />}>
            <Route index element={<Inicio />} />
            <Route path="nuevo" element={<NuevoCliente />} />
            <Route path="editar/:id" element={<EditarCliente />} />
            <Route path=":id" element={<VerCliente />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
