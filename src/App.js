import {UseState}from 'react'
import {BrowserRouter,Routes,Route}from 'react-router-dom'
import IniciarSesion from './Layout/IniciarSesion';
import Layout from './Layout/Layout';
function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route>
        <Route path='/'element={<IniciarSesion/>}/>
      </Route>
      <Route>
        <Route path="/Clientes"element={<Layout />}/>
      </Route>
    </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
