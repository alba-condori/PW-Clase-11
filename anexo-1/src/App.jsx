import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

const URL = "https://api.github.com/users/alba-condori"

function PerfilGitHub() {
  const [datos, setDatos] = useState(null)
  const [error, setError] = useState(null)
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    async function traerPerfil() {
      try {
        const respuesta = await fetch(URL);
        if (!respuesta.ok) {
          throw new Error(`Error ${respuesta.status}`);
        }
        const perfil = await respuesta.json();
        console.log(perfil);
        setDatos(perfil);
      } catch (error) {
        console.log(error);
        setError(error.message);
      } finally {
        setCargando(false);
      }
    }
    traerPerfil();
  }, []);

  if (cargando) {
    return <>cargando...</>;
  }
  if (error) {
    return <>Error: {error}</>
  }

  return (
    <>
      <img src={datos.avatar_url} alt={datos.name || datos.login} />
      <h2>{datos.name}</h2>
      <h3>{datos.public_repos}</h3>
    </>
  )
}

function BuscadorPokemon() {
  const [nombre, setNombre] = useState("")
  const [pokemon, setPokemon] = useState(null)
  const [cargando, setCargando] = useState(false)
  const [error, setError] = useState(null)

  async function buscar() {
  try {
    setCargando(true)
    setError(null)

    const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
    if (!respuesta.ok) {
      throw new Error(`Error ${respuesta.status}`)
    }
    const datos = await respuesta.json()
    setPokemon(datos)
  } catch (e) {
    setError(e.message)
  } finally {
    setCargando(false)
  }
}

  return (
  <>
    <input value={nombre} onChange={(e) => setNombre(e.target.value)} />
    <button onClick={buscar}>Buscar</button>

    {cargando && <p>cargando...</p>}
    {error && <p>Error: {error}</p>}
    {pokemon && (
      <div>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <h3>{pokemon.name}</h3>
      </div>
    )}
  </>
  )
}

function App() {
  return (
    <>
      <PerfilGitHub />
      <BuscadorPokemon />
    </>
  )
}

export default App