import React, {useState} from 'react'
import { Formik } from 'formik'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


const Form = () => {
 
    const [formularioEnviado, setFormularioEnviado] = useState(false);

    return (
      <>
    <div>
        <div className='newsletter'>
           <h6>NEWSLETTER</h6>
           <h1>SUSCRIBITE</h1> 
           <span>Y enterate de las novedades</span>
        </div>
            <Formik
              initialValues={{
                correo: ''
              }}
              validate={(valores) =>{
                let errores = {};             

                if (!valores.correo) {
                  errores.correo = 'Por favor ingresa un email'
                }
                else if(!/\S+@\S+\.\S+/.test(valores.correo)){
                  errores.correo = 'Ingrese un email válido'
                }

                return errores;

              }}
              onSubmit={(valores, {resetForm})  =>{
                resetForm();
                setFormularioEnviado(true)  
                setTimeout(() => setFormularioEnviado(false), 3000)     
              }}
            >
            {({values, errors, handleSubmit, handleChange,handleBlur}) => (
              
              <form className="form1" onSubmit={handleSubmit}>
                
              <div className='divForm'>
                {errors.correo && <div className='errores'> {errors.correo} </div>}
                <input 
                  type="email" 
                  id="correo"
                  name='correo' 
                  placeholder='Ingresa tu email' 
                  value={values.correo}  
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <button type='submit'>
                  <FontAwesomeIcon icon={faArrowRight}/>
                </button>
              </div>
                
              </form>
              
            )}
        </Formik>     
      </div>
      <div className='enviado'>
       {formularioEnviado && <p>Formulario enviado!</p>}
      </div>
      </>

  )
}

export default Form