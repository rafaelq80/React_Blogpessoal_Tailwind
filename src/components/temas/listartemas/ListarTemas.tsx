import { useNavigate } from "react-router-dom";
import { listar } from "../../../services/Service";
import CardTemas from "../cardtemas/CardTemas";
import { useState, useEffect } from "react";
import Tema from "../../../models/Tema";
import useLocalStorage from "react-use-localstorage";

function ListarTemas() {

    const [token, setToken] = useLocalStorage('token');
    const [temas, setTemas] = useState<Tema[]>([]);

    let navigate = useNavigate();

    async function buscarTemas() {
        await listar('/temas', setTemas, {
            headers: { Authorization: token },
        });
    }

    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado');
            navigate('/login');
        }
    }, [token]);

    useEffect(() => {
        buscarTemas();
      }, [temas.length]);
      
    return (
        <>
            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {temas.map((tema) => (
                            <>
                                <CardTemas key={tema.id} tema={tema} />
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ListarTemas;