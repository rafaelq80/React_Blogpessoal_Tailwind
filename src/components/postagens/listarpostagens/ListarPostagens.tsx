import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Postagem from '../../../models/Postagem';
import { listar } from '../../../services/Service';
import CardPostagem from '../cardpostagens/CardPostagens';

function ListarPostagens() {

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
    try{
    await listar('/postagens', setPostagens, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
      alert('Erro ao listar postagens.');
  }
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
