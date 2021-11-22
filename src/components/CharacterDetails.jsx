import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

function CharacterDetails() {
    const { id } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        getCharacter()
    })

    const getCharacter = () => {
        axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => setCharacter(response.data))
    }
    return (
        <div className="">Character Details
            { character && 
                <h1>{character.name}</h1>
            }
        </div>
    )
}

export default CharacterDetails
