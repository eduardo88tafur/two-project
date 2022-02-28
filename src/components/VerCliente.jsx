import { useParams } from 'react-router-dom'
import React from 'react'

const VerCliente = () => {
    const{id} = useParams()
    console.log(id);
  return (
    <div>VerCliente</div>
  )
}

export default VerCliente