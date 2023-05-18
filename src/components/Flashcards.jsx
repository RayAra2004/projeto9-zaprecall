import Concluido from "./Concluido";
import Logo from "./Logo";
import Perguntas from "./perguntas/Perguntas";
import styled from "styled-components";


export default function Flashcards(){
    return(
        <SCFlashCards>
            <Logo/>
            <Perguntas/>
            <Concluido/>
        </SCFlashCards>
    );
}

const SCFlashCards = styled.div`
  background-color: #FB6B6B;
`