//É necessário tipar as props, como a name, por exemplo:


type GreetingProps = {
    name: string;
}



const Greeting = ({name} : GreetingProps) => {
  return (
    <div>Olá, {name} !!!</div>
  )
}

export default Greeting