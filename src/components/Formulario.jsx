import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Alerta from "./Alerta";
import { useNavigate } from "react-router-dom";

const Formulario = () => {
  const navigate= useNavigate()
  const nuevoClienteSchema = Yup.object().shape({
    nombre: Yup.string()
      .min(4, "el nombre es muy corto")
      .max(10, "el nombre es muy largo")
      .required("el nombre del cliente es obligatorio"),
    empresa: Yup.string()
      .min(4, "el nombre es muy corto")
      .max(10, "el nombre es muy largo")
      .required("el nombre de la empresa  es obligatorio"),

    email: Yup.string()
    .email()
    .required("email obligatorio"),
    telefono: Yup.number()
                .integer('numero invalido')
                  .typeError('numero no es valido')
  })
   const handleSubmit=async(valores)=>{
    //  console.log(valores);
    //  valores = {
    //    ...valores,
    //    id: 1,
    //  }
     try{
       const url= "http://localhost:4000/clientes"
      const respuesta=await fetch(url,{

         method:"POST",
         body: JSON.stringify(valores),
         headers:{
           "Content-Type":"application/json"
         }
       })
       console.log(respuesta);
       const resultado= await respuesta.json()
       console.log(resultado);
       navigate('/clientes')
     }catch(error){
       console.log(error);
     }
   }

  return (
    <div className="bg-white mt-10 py-10 px-5 shadow-md rounded-md mx-auto">
      <h1 className="text-gray-600 font-bold text-xl text-center uppercase">
        agregar cliente
      </h1>
      <Formik
        initialValues={{
          nombre: "",
          empresa: "",
          email: "",
          telefono: "",
          notas: "",
        }}
        onSubmit={async(values,{resetForm}) => {
         await handleSubmit(values)
         resetForm()
        }}
        validationSchema={nuevoClienteSchema}
      >
        {({ errors, touched }) => {
          console.log(touched);
          return (
            <Form>
              <div className="mb-4">
                <label className="text-gray-800" htmlFor="nombre">
                  Nombre:
                </label>
                <Field
                  type="text"
                  className="mt-2 block w-full p-3 bg-gray-50"
                  placeholder="nombre del cliente"
                  name="nombre"
                />
                {errors.nombre && touched.nombre ? (
                  <Alerta>{errors.nombre}</Alerta>
                ) : null}
              </div>
              <div className="mb-4">
                <label className="text-gray-800" htmlFor="empresa">
                  Empresa:
                </label>
                <Field
                  type="text"
                  className="mt-2 block w-full p-3 bg-gray-50"
                  placeholder="nombre de la empresa"
                  name="empresa"
                />
                {errors.empresa && touched.empresa ? (
                  <Alerta>{errors.empresa}</Alerta>
                ) : null}
              </div>
              <div className="mb-4">
                <label className="text-gray-800" htmlFor="Email">
                  Email:
                </label>
                <Field
                  type="text"
                  className="mt-2 block w-full p-3 bg-gray-50"
                  placeholder="ingrese el email"
                  name="email"
                />

                {errors.email && touched.email ? (
                  <Alerta>{errors.email}</Alerta>
                ) : null}
              </div>
              <div className="mb-4">
                <label className="text-gray-800" htmlFor="telefono">
                  telefono:
                </label>
                <Field
                  type="tel"
                  className="mt-2 block w-full p-3 bg-gray-50"
                  placeholder="ingrese el telefono"
                  name="telefono"
                />
                {errors.telefono && touched.telefono ? (
                  <Alerta>{errors.telefono}</Alerta>
                ) : null}
              </div>
              <div className="mb-4">
                <label className="text-gray-800" htmlFor="Notas">
                  Notas:
                </label>
                <Field
                  as="textarea"
                  id="notas"
                  type="text"
                  className="mt-2 block w-full p-3 bg-gray-50 h-40"
                  placeholder="ingrese las notas del cliente"
                  name="notas"
                />
              </div>
              <input
                type="submit"
                value="Agregar cliente"
                className=" mt-5 bg-blue-800 p-3 font-bold text-white upercase w-full"
              />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Formulario;
