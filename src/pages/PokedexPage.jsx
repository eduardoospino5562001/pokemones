import React, { useEffect, useRef } from 'react'; 
import { useDispatch, useSelector } from 'react-redux';
import { setPokemonName } from '../store/slices/pokemonName.slice';
import useFetch from '../hooks/useFetch';
import PokeCard from '../components/pokedexPage/PokeCard';

const PokedexPage = () => {

  const trainerName = useSelector(store => store.trainerName);
  const pokemonName = useSelector(store => store.pokemonName);
  const dispatch = useDispatch();
  const [pokemons, getPokemons] = useFetch();
  
  useEffect(() => {
    const url = ' https://pokeapi.co/api/v2/pokemon/?limit=5';
    getPokemons(url);
  }, []);
  


  

  const textInput = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setPokemonName(textInput.current.value.trim().toLowerCase()));
  }

  console.log(pokemons);

  const cbFilter = (element) => {

  }

  return (
    <div>
      <section>
      <h3><span>Bienvenido {trainerName}, </span>Aqui podras encontrar tu pokemon favorito</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={textInput} />
        <button>Buscar</button>
      </form>
      </section>
      <section>
        {
          pokemons?.results.filter().map(poke => (
            <PokeCard
              key={poke.url}
              url={poke.url}
            />
          ))
        }
      </section>
    </div>
  )
}

export default PokedexPage;