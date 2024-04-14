//Pra navegação de rotas automáticas:



//FORMULÁRIO COM FORMIIIIIK


import {useNavigate} from 'react-router-dom'

import { Alimento, nomeAlimentos } from '../types/Alimento'


import { Formik, Field, Form } from 'formik'

import * as Yup from 'yup'



const esquemaValidacao = Yup.object().shape({

                    // Mínimo é 1, caso contrário exibe a mensagem dizendo que é obrigatório !!!
      pessoas: Yup.number().min(1, "Número de pessoas é obrigatório !!!"),

      selecaoAlimentos: Yup.array().of(Yup.string()).test("check-selecaoAlimentos",
       "Selecione, no mínimo, 1 alimento !",

       //Verificando........
        (array) => array !== null && array!.length > 0)


})

const CalculadoraChurrasco = () => {

  const navigate = useNavigate()

  return (
    <div>

    <Formik 

    initialValues={{pessoas: 0, selecaoAlimentos: []}}
    validationSchema={esquemaValidacao}
     
    //Depois de submeter, redireciona para a pagina de resultado
     onSubmit={(values)=>{navigate("/resultado", {
      state: {
        pessoas: values.pessoas,
        alimentosSelecionados: values.selecaoAlimentos,
      }
     })}}>
      
    

    {({errors, touched})=>(

    <Form>

    <div>
      <label htmlFor="pessoas">Números de Pessoas: </label>
      <Field name="pessoas" type="number"/>
      {errors.pessoas && touched.pessoas ? (<p>{errors.pessoas}</p>) : null}

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
        {errors.selecaoAlimentos && touched.selecaoAlimentos ? (<p>{errors.selecaoAlimentos}</p>) : null}
        <button type="submit">Calcular</button>

    </Form>

    )}


    </Formik>


    </div>
  )
}

export default CalculadoraChurrasco