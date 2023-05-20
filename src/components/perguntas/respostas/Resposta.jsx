import styled from "styled-components";

function responder(answer, color, respondidas, setRespondidas, indice){
    if(answer === 'Não lembrei'){
        const res = {color: color, indice: indice};
        setRespondidas([...respondidas, res]);
    }else if(answer === 'Quase não lembrei'){
        const res = {color: color, indice: indice};
        setRespondidas([...respondidas, res]);
    }else{
        const res = {color: color, indice: indice};
        setRespondidas([...respondidas, res]);
    }
}

export default function Resposta(props){
    const {answer, color} = props.possivel;
    const {respondidas, setRespondidas, indice} = props;

    return(
        <>
            <SCResposta onClick={() => responder(answer, color, respondidas, setRespondidas, indice)} color = {color}>{answer}</SCResposta>
        </>
    );
}

const SCResposta = styled.button`
        background-color: ${props => props.color};
        border: none;
        width: 85.17px;
        height: 37.17px;
        border-radius: 5px;
        color: #FFFFFF;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;       
        text-align: center;

`