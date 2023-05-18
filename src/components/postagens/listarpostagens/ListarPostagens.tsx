import CardPostagem from '../cardpostagens/CardPostagens';

function ListarPostagens() {

  return (
    <>
      <div className='container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          <CardPostagem />
      </div>
    </>
  );
}

export default ListarPostagens;
