import { useForms } from "../hooks/useForms";
import { FormSchema } from "../schemas/formSchema";


const Form = () => {
  const{ register, handleSubmit, errors} = useForms();
  
  const onSubmit = (data: FormSchema) => {
    console.log(data);
  }
  
  
  return (
    //primeiro faz o handle pra depos fazer o onSubmit

    <form onSubmit={handleSubmit(onSubmit)} className="w-96 bg-white p-4 rounded-md border border-slate-300">

      {/* NOMEEEEEEEEEEEEEEEE : */}

      <div className="flex flex-col gap-2 mb-2">
        <label htmlFor="name">Nome:</label>
        <input placeholder="Digite seu nome: "
         type="text" id="name" 
         {...register("name")}
         className="h10 pl-2 rounded-md border border-slate-300"
          />
        {errors.name && <small className="text-red-500 italic">{errors.name?.message}</small>}
      </div>

    {/* SOBRENOMEEEE : */}



    <div className="flex flex-col gap-2 mb-2">
        <label htmlFor="lastname">Sobrenome:</label>
        <input placeholder="Digite seu Sobrenome: "
         type="text" id="lastname"
          {...register("lastname")}
         className="h10 pl-2 rounded-md border border-slate-300"
          />
        {errors.lastname && <small className="text-red-500 italic">{errors.lastname?.message}</small>}
      </div>



      {/* GENEROOOO: */}


      <div className="flex flex-col gap-2 mb-2">
        <label htmlFor="gender">Gênero: </label>
        <select id="gender" {...register("gender")} className="h10 pl-1 rounded-md border border-slate-300">

        <option value="select">Selecione</option>
        <option value="male">Masculino</option>
        <option value="female">Feminino</option>


        </select>
        {errors.gender && <small className="text-red-500 italic">{errors.gender.message}</small>}
      </div>



      {/* EMAIL:    */}
      

      <div className="flex flex-col gap-2 mb-2">
        <label htmlFor="email">Email:</label>
        <input placeholder="Digite seu email: "
         type="email" id="email"
          {...register("email")}
         className="h10 pl-2 rounded-md border border-slate-300"
          />
        {errors.email && <small className="text-red-500 italic">{errors.email.message}</small>}
      </div>


    {/* SENHAAAAAAAAAAAAAAAAAAA:        */}



    <div className="flex flex-col gap-2 mb-2">
        <label htmlFor="password">Senha: </label>
        <input placeholder="Insira uma nova senha: "
         type="password" id="password"
          {...register("password")}
         className="h10 pl-2 rounded-md border border-slate-300"
          />
        {errors.password && <small className="text-red-500 italic">{errors.password.message}</small>}
      </div>



{/* CONFIRMAR SENHAAAAAAAAAAAAAAAAAAAAAAAAAAAA:        */}

      <div className="flex flex-col gap-2 mb-2">
        <label htmlFor="confirmpassword">Confirmação de Senha: </label>
        <input placeholder="Agora digite novamente a senha: "
         type="password" id="confirmpassword"
          {...register("confirmpassword")}
         className="h10 pl-2 rounded-md border border-slate-300"
          />
        {errors.confirmpassword && <small className="text-red-500 italic">{errors.confirmpassword.message}</small>}
      </div>



      {/* CONCORDA COM OS TERMOSSSSSSSSSSS  */}



      <div className="flex flex-col gap-2 mb-2">
        
      <div className="flex gap-2">
      <input placeholder=" "
         type="checkbox" id="agree"
          {...register("agree")}
         
          />
          <label htmlFor="agree">Concordo com os termos: </label>
      </div>
        {errors.agree && <small className="text-red-500 italic">{errors.agree.message}</small>}
      </div>





      <button type="submit" className="w-full h-11 bg-green-400 rounded-md my-2 hover:bg-cyan-500 transition-all">Cadastrar</button>
    </form>
  )
}

export default Form