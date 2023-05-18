import { Link, useNavigate } from "react-router-dom";
import './Login.css'
import { useState, ChangeEvent, useEffect } from "react";
import UsuarioLogin from "../../models/UsuarioLogin";
import useLocalStorage from "react-use-localstorage";
import { api } from "../../services/Service";

function Login() {

  let navigate = useNavigate();
  const [token, setToken] = useLocalStorage('token');
  
  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
      {
          id: 0,
          nome: '',
          usuario: '',
          senha: '',
          foto: '',
          token: '',
      }
  )

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {

      setUsuarioLogin({
          ...usuarioLogin,
          [e.target.name]: e.target.value
      })
  }

  useEffect(() => {
      if (token !== '') {
          navigate('/home')
      }
  }, [token])

  async function login(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
        const resposta = await api.post(`/usuarios/logar`, usuarioLogin)
        setToken(resposta.data.token)

        alert('Usuário logado com sucesso!');
    } catch (error) {
        alert('Dados do usuário inconsistentes. Não foi possível efetuar o login!');
    }
}
  
    return ( 
        <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold ">
        <form className="flex justify-center items-center flex-col w-1/2 gap-4" onSubmit={login}>
          <h2 className="text-slate-900 text-5xl ">Entrar</h2>
          <div className="flex flex-col w-full">
            <label htmlFor="usuario">Usuário</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="Usuario"
              className="border-2 border-slate-700 rounded p-2"
              value={usuarioLogin.usuario} 
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Senha"
              className="border-2 border-slate-700 rounded p-2"
              value={usuarioLogin.senha} 
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
            {/* <Link to='/home' className='text-decorator-none'> */}
                <button  type='submit' className="rounded bg-indigo-400 hover:bg-indigo-900 text-white w-1/2 px-8 py-2 flex justify-center">
                    <span>Entrar</span>
                </button>
            {/* </Link> */}
          <hr className="border-slate-800 w-full" />

          <p>
            Ainda não tem uma conta?{' '}
            <Link to="/cadastro" className="text-indigo-800 hover:underline">
              Cadastre-se
            </Link>
          </p>
        </form>
        <div className="fundoLogin hidden lg:block"></div>
      </div>
     );
}

export default Login;