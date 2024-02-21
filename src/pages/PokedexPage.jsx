import React, { useRef } from 'react'; 
import { useDispatch, useSelector } from 'react-redux';
import { setPokemonName } from '../store/slices/pokemonName.slice';

const PokedexPage = () => {

  const trainerName = useSelector(store => store.trainerName);
  const pokemonName = useSelector(store => store.pokemonName);
  const dispatch = useDispatch();

  const textInput = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setPokemonName(textInput.current.value.trim().toLowerCase()));
  }

  console.log(pokemonName);

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
        {}
      </section>
    </div>
  )
}

export default PokedexPage;