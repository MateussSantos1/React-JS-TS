//Pra navegação de rotas automáticas:



//FORMULÁRIO COM FORMIIIIIK


import {useNavigate} from 'react-router-dom'

import { Alimento, nomeAlimentos } from '../types/Alimento'


import { Formik, Field, Form } from 'formik'

import * as Yup from 'yup'


const CalculadoraChurrasco = () => {

  const navigate = useNavigate()

  return (
    <div>

    <Formik initialValues={{pessoas: 0, selecaoAlimentos: []}} onSubmit={()=>{navigate("/resultado")}}>
      
    <Form>

    <div>
      <label htmlFor="pessoas">Números de Pessoas: </label>
      <Field name="pessoas" type="number"/>
    </div>
    <h2>Selecione os Alimentos Para o Churrasco: </h2>
    {
      Object.keys(nomeAlimentos).map((alimento) =>(
        <div>
          <Field type="checkbox" name="selecaoAlimentos" value={alimento}/>
          <label htmlFor="selecaoAlimentos">{nomeAlimentos[alimento]}</label>
        </div>
      ))
    }
        <button type="submit">Calcular</button>

    </Form>


    </Formik>


    </div>
  )
}

export default CalculadoraChurrasco