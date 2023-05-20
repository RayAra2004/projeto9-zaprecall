import Concluido from "./Concluido";
import Logo from "./Logo";
import Perguntas from "./perguntas/Perguntas";
import styled from "styled-components";
import cards from "../cards";
import { useState } from "react";


export default function Flashcards(){

    const [respondidas, setRespondidas] = useState([]);

    return(
        <SCFlashCards>
            <Logo/>
            <Perguntas cards = {cards} respondidas = {respondidas} setRespondidas = {setRespondidas}/>
            <Concluido cards = {cards} respondidas = {respondidas}/>
        </SCFlashCards>
    );
}

const SCFlashCards = styled.div`
  background-color: #FB6B6B;
`