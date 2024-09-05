import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import Cadastro from "./pages/cadastro/Cadastro"
import Login from "./pages/login/Login"
import { AuthProvider } from "./contexts/AuthContex"

import ListaTemas from "./components/temas/listatemas/ListaTemas"
import FormTema from "./components/temas/formtema/FormTema"
import DeletarTema from "./components/temas/deletartema/DeletarTema"

import ListaPostagens from "./components/postagens/listapostagens/ListaPostagens"
import FormPostagem from "./components/postagens/formpostagem/FormPostagem.tsx"
import DeletarPostagem from "./components/postagens/deletarpostagem/DeletarPostagem"

import Perfil from "./pages/perfil/Perfil"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

function App() {
  //fora do return código typescript
  return (
    <>
      <AuthProvider>
        <ToastContainer/>
        <BrowserRouter>
          <Navbar />
          <div className="min-h-[80vh]">
            <Routes> {/* routes - é o gerenciador de rotas, vai decidir oq pode ser renderizado em qualquer componente do app*/}
              <Route path="/" element={<Login />} />  {/* route - rota propriamente dita // path - vai definir o caminho da rota */}
              <Route path="/home" element={<Home />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/login" element={<Login />} />

              <Route path="/temas" element={<ListaTemas />} />
              <Route path="/cadastrartema" element={<FormTema />} />
              <Route path="/editartema/:id" element={<FormTema />} />
              <Route path="/deletartema/:id" element={<DeletarTema />} />

              <Route path="/postagens" element={<ListaPostagens />} />
              <Route path="/cadastrarpostagem" element={<FormPostagem />} />
              <Route path="/editarpostagem/:id" element={<FormPostagem />} />
              <Route path="/deletarpostagem/:id" element={<DeletarPostagem />} />
              
              <Route path="/perfil" element={<Perfil />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
