import React from "react";

const Alerta = ({children}) => {
  return (
    <div className="text-center bg-red-600 font-bold rounded-md ">
      {children}
    </div>
  );
};

export default Alerta;
