import React from "react";
import  {useNavigate} from "react-router-dom";
const Cliente = ({ cliente }) => {
    const navigate=useNavigate()
  const { nombre, empresa, email, telefono, notas, id } = cliente;
  return (
    <tr className="border-b hover:bg-yellow-100">
      <td className="p-3">{nombre}</td>
      <td className="p-3">
        <p>
          <span className=" text-gray-800 uppercase font-bold"> email:</span>
          {email}
        </p>
        <p>
          <span className=" text-gray-800 uppercase font-bold"> tel:</span>
          {telefono}
        </p>
      </td>
      <td className="p-3">{empresa}</td>
      <td className="p-3">
      <button
          type="button"
          className=" bg-green-600 hover:bg-green-700 uppercase  text-white w-full rounded-lg shadow-black p-2 text-xs"
          onClick={()=>navigate(`/clientes/${id}`)}
        >
          ver
        </button>
        <button
          type="button"
          className=" bg-blue-600 hover:bg-blue-700 uppercase mt-1 text-white w-full rounded-lg shadow-black p-2 text-xs"
        
        >
          editar
        </button>
        <button
          type="button"
          className=" bg-red-600 hover:bg-red-700 uppercase text-white w-full rounded-lg text-xs mt-1 shadow-black p-2"
        >
          eliminar
        </button>

      </td>
    </tr>
  );
};

export default Cliente;
