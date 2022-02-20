import React from "react";
import { Formik, Form, Field } from "formik";
import { Input } from "postcss";
const Formulario = () => {
  return (
    <div className="bg-white mt-10 py-10 px-5 shadow-md rounded-md mx-auto">
      <h1 className="text-gray-600 font-bold text-xl text-center uppercase">
        agregar cliente
      </h1>
      <Formik
      initialValues={{
          nombre:'',
          empresa:'',
          email:'',
          telefono:'',
          notas:'',

      }}
      onSubmit={(values)=>{
          console.log(values);
      }}
      >{()=>(

          <Form>
          <div className="mb-4">
            <label className="text-gray-800" htmlFor="nombre">
              Nombre:
            </label>
            <Field
              type="text"
              className="mt-2 block w-full p-3 bg-gray-50"
              placeholder="nombre del cliente"
              name='nombre'
              />
          </div>
          <div className="mb-4">
            <label className="text-gray-800" htmlFor="empresa">
              Empresa:
            </label>
            <Field
              type="text"
              className="mt-2 block w-full p-3 bg-gray-50"
              placeholder="nombre de la empresa"
              name='empresa'
              />
          </div>
          <div className="mb-4">
            <label className="text-gray-800" htmlFor="Email">
              Email:
            </label>
            <Field
              type="text"
              className="mt-2 block w-full p-3 bg-gray-50"
              placeholder="ingrese el email"
              name='email'
              />
          </div>
          <div className="mb-4">
            <label className="text-gray-800" htmlFor="telefono">
              telefono:
            </label>
            <Field
              type="tel"
              className="mt-2 block w-full p-3 bg-gray-50"
              placeholder="ingrese el telefono"
              name=' telefono'
              
              />
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
              name='notas'
              />
          </div>
          <input
            type="submit"
            value="Agregar cliente"
            className=" mt-5 bg-blue-800 p-3 font-bold text-white upercase w-full"
            />
        </Form>
            )}
      </Formik>
    </div>
  );
};

export default Formulario;
