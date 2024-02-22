import React, { useEffect, useRef } from 'react';
import useFetch from '../../hooks/useFetch';

const SelectType = ({setSelectValue}) => {

    const [ types, getTypes ] = useFetch();

    useEffect(() => {
        const url = 'https://pokeapi.co/api/v2/type';
        getTypes(url);
    }, [])
    
    //console.log(types);

    const textSelect = useRef();

    const handleChange = () => {
        setSelectValue(textSelect.current.value);
    }

  return (
    <select onChange={handleChange} ref={textSelect}>
        <option value="allPokemons">all Pokemons</option>
        {
            types?.results.map(type => (
                <option key={type.url} value={type.url}>
                    {type.name}
                </option>
            ))
        }
    </select>
  )
}

export default SelectType;