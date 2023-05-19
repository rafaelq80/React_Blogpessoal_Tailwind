import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Cadastro from './pages/cadastro/Cadastro';
import ListarTemas from './components/temas/listartemas/ListarTemas';
import ListarPostagens from './components/postagens/listarpostagens/ListarPostagens';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/postagens" element={<ListarPostagens />} />
              <Route path="/temas" element={<ListarTemas />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/" element={<Login />} />              
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          </div>  
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
