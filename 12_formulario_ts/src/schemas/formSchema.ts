// ZOD irá fazer as validações de dados do schema !!!

import { z } from 'zod';

export const formSchema = z.object({
    name: z.string().min(3, 'Escreva, no mínimo, 3 caracteres')
    ,
    lastname: z.string().min(3, 'Escreva, no mínimo, 3 caracteres')
    ,
    gender: z.string().refine((field) => field !== "select", {
        message: "Escolha um gênero !!!"
    }),
    email: z.string().min(1, "O campo é obrigatório !!!").email("Utilize um email válido  !!!")
    ,
    password: z.string().min(6, "A senha deve ter, no mínimo, 6 caracteres")
    ,
    confirmpassword: z.string().min(6, "A senha deve ter, no mínimo, 6 caracteres")
    ,
    agree: z.boolean().refine((field) => field === true, {
        message: "Para enviar o formulário, por favor, concorde com os termos !!!"
    })
}).refine((field) => field.password === field.confirmpassword, {
    message: "As senhas precisam ser iguais !",
    path: ["confirmpassword"]
});


export type FormSchema = z.infer<typeof formSchema>



