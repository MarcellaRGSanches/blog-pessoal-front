import Home from "./pages/home/Home"


function App() {
  //fora do return código typescript
  return (
    // dentro do return é o código tsx => HTML + CSS
    <> <Home /> </>
    // essa tag 'fantasma' se chama fragment, e é usada para envolver o conteudo, 
    //o react impõe essa condição quando possui mais de um conteudo,
    // no caso temos um titulo e um subtitulo
  )
}

export default App
