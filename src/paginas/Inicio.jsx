import React from "react";
import { useState, useEffect } from "react";
import Cliente from "../components/Cliente";

const Inicio = () => {
  const [clientes, setClientes] = useState([]);
  useEffect(() => {
    const obtenerClientesAPI = async () => {
      try {
        const url = " http://localhost:4000/clientes";
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setClientes(resultado);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerClientesAPI();
  }, []);
  const handleEliminar =async (id) => {
    const confirmar=  window.confirm ('deseas eliminar este cliente?')
    if(confirmar){
      try {
        const url= `http://localhost:4000/clientes/${id}`
        const respuesta=await fetch(url,{
          method:'DELETE'
        })
        await respuesta.json()
      }catch(error){

      }
    }
  };
  return (
    <div>
      <h1 className="text-white bg-blue-700 font-black text-center rounded-lg">
        clientes{" "}
      </h1>
      <p className="text-blue-700 font-black rounded-lg mt-5">
        clientes registrados
      </p>
      <table className="w-full mt-5 table-auto shadow bg-white">
        <thead className="bg-blue-800 text white">
          <tr>
            <th className="p-2">nombre</th>
            <th className="p-2">contacto</th>
            <th className="p-2">empresa</th>
            <th className="p-2">acciones</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente) => (
            <Cliente
              key={cliente.id}
              cliente={cliente}
              handleEliminar={handleEliminar}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Inicio;
