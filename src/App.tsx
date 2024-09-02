import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import Cadastro from "./pages/cadastro/cadastro"

function App() {
  //fora do return código typescript
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <div className="min-h-[80vh]">
                <Routes> {/* routes - é o gerenciador de rotas, vai decidir oq pode ser renderizado em qualquer componente do app*/}
          <Route path="/" element={<Home />} />  {/* route - rota propriamente dita // path - vai definir o caminho da rota */}
          <Route path="/home" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  </>
  )
}

export default App
