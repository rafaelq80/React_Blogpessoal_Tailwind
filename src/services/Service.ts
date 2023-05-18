import axios from "axios"

export const api = axios.create({
    baseURL: 'http://localhost:8080/'
  })
  
  export const login = async(url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
  }

  export const cadastrarUsuario = async(url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
  }

  export const listar = async(url: string, setDados: Function, header: Object) => {
    const resposta = await api.get(url, header)
    setDados(resposta.data)
  }