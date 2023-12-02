const Hola = (params) => {
  return <h1>{params.mensaje}</h1>
}


const App = () => {
  console.log("hellooooooooooooooooooo")
  return (
      <div>
        <Hola mensaje = "jijijiiijij"/>
      </div>

  )
}

export default App
