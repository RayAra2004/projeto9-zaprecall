import styled from 'styled-components';

import Pergunta from './Pergunta';
import { useState } from 'react';

export default function Perguntas(props){
    const {cards, respondidas, setRespondidas} = props;
    const [mostrarPerguntas, setMostrarPerguntas] = useState([]);
    const [mostrarRespostas, setMostrarRespostas] = useState([]);

    return(
        <SCPerguntas>
            {cards.map((card, i) => <Pergunta 
                key = {card.question} 
                card = {card} 
                indice = {i} 
                mostrarPerguntas = {mostrarPerguntas} 
                setMostrarPerguntas = {setMostrarPerguntas}
                mostrarRespostas = {mostrarRespostas}
                setMostrarRespostas = {setMostrarRespostas}
                respondidas = {respondidas}
                setRespondidas = {setRespondidas}
                />
            )}
        </SCPerguntas>
    );
}

const SCPerguntas = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 60px;
    margin-bottom: 70px;
`