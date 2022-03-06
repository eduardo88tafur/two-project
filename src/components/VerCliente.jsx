import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
//import { Object } from "yup";
import Spiner from "../components/Spiner";

const VerCliente = () => {
  const [cliente, setCliente] = useState({});
  const [cargando, setCargando] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    const obtenerClienteAPI = async () => {
      try {
        const url = `http://localhost:4000/clientes/${id}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setCliente(resultado);
      } catch (error) {
        console.log(error);
      }
      setTimeout(()=>{
        setCargando(!cargando);
      },3000)
    }
    obtenerClienteAPI();
  },);
  return (
    cargando ? 
    <Spiner/>
   :  
   Object.keys(cliente).length === 0 ?
    <p>no hay resultados</p>
  : (
    <div>
      <span className="text-gray-700 font-bold uppercase">cliente:</span>
      {cliente.nombre}
      <p className="text-2xl text-gray-700"></p>
      <span className="text-gray-700 font-bold uppercase">email:</span>
      {cliente.email}
      <p className="text-2xl text-gray-700"></p>
      <span className="text-gray-700 font-bold uppercase">telefono:</span>
      {cliente.telefono}
      <p className="text-2xl text-gray-700"></p>
      <span className="text-gray-700 font-bold uppercase">empresa:</span>
      {cliente.empresa}
      <p className="text-2xl text-gray-700"></p>

      <span className="text-gray-700 font-bold uppercase">notas:</span>
      {cliente.notas}
      <p className="text-2xl text-gray-700"></p>
    </div>
  )
  )
}
  
export default VerCliente;
