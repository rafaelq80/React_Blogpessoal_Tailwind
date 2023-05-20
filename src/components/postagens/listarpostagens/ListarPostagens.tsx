import useLocalStorage from 'react-use-localstorage';
import { listar } from '../../../services/Service';
import CardPostagem from '../cardpostagens/CardPostagens';
import Postagem from '../../../models/Postagem';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';

function ListarPostagens() {

  // const [token, setToken] = useLocalStorage('token');
  const [postagens, setPostagens] = useState<Postagem[]>([]);

  let navigate = useNavigate();

  const { usuario } = useContext(AuthContext);
  const token = usuario.token;

  useEffect(() => {
    if (token === '') {
      alert('Você precisa estar logado');
      navigate('/login');
    }
  }, [token]);

  async function buscarPostagens() {
    await listar('/postagens', setPostagens, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    buscarPostagens();
  }, [postagens.length]);

  return (
    <>
      <div className='container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {postagens.map((postagem) => (
          <CardPostagem key={postagem.id} post={postagem} />
        ))}
      </div>
    </>
  );
}

export default ListarPostagens;
