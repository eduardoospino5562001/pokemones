import React, { useRef } from 'react';
import { setTrainerName } from '../store/slices/trainerName.slice';
import { useDispatch, useSelector } from 'react-redux';

const HomePage = () => {

  const dispatch = useDispatch();
  const trainerName = useSelector((store) => store.trainerName);

  const textInput = useRef();

  const handleSubmit = (event) =>{
    event.preventDefault();
    dispatch(setTrainerName(textInput.current.value.trim()));
  }

  console.log(trainerName);

  return (
    <div>
      <h1>¡Hola entrenador!</h1>
      <h2>Para poder comenzar, dame tu nombre</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={textInput}/>
        <button>Comenzar</button>
      </form>
    </div>
  )
}

export default HomePage;