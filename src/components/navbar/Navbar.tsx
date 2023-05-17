import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='
                w-full 
                bg-indigo-900
                text-white
                flex 
                justify-center 
                py-4
                '>
                <div className="
                    container 
                    flex 
                    justify-between 
                    text-lg
                ">
                    <Link to='/home' className='text-2xl font-bold uppercase'>Blog Pessoal</Link>

                    <div className='flex gap-4'>
                        Postagens
                        Temas
                        Cadastrar tema
                        Perfil
                        <Link to='/' className='hover:underline'>Sair</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar