import styled from 'styled-components';
import play from './../../assets/seta_play.png'
import virar from './../../assets/seta_virar.png'
import certo from './../../assets/icone_certo.png'
import erro from './../../assets/icone_erro.png'
import quase from './../../assets/icone_quase.png'
import Respostas from './respostas/Respostas';

function desestrutura(r){
    const i = r.map(e =>  e.indice)
    const c = r.map(f =>  f.color)
    return [i, c]
}

export default function Pergunta(props){
    const {question, answer} = props.card;
    const {mostrarPerguntas, setMostrarPerguntas, mostrarRespostas, setMostrarRespostas, respondidas, setRespondidas} = props;
    let pergunta;

    const [indexes, colors] = desestrutura(respondidas);
    if(!(mostrarPerguntas.includes(props.indice))){
        pergunta = (
            <SCPergunta>
                <p>Pergunta {props.indice + 1}</p>
                <img src={play} alt="play" onClick={() => setMostrarPerguntas([...mostrarPerguntas, props.indice])}/>
            </SCPergunta>
        );
    }else if(indexes.includes(props.indice)){
        if(colors[indexes.indexOf(props.indice)] === '#2FBE34'){
            pergunta = (
                <SCRespondido color={colors[indexes.indexOf(props.indice)]}>
                    <p>Pergunta {props.indice + 1}</p>
                    <img src={certo}/>
                </SCRespondido>
            );
        }
        if(colors[indexes.indexOf(props.indice)] === '#FF922E'){
            pergunta = (
                <SCRespondido color={colors[indexes.indexOf(props.indice)]}>
                    <p>Pergunta {props.indice + 1}</p>
                    <img src={quase}/>
                </SCRespondido>
            );
        }
        if(colors[indexes.indexOf(props.indice)] === '#FF3030'){
            pergunta = (
                <SCRespondido color={colors[indexes.indexOf(props.indice)]}>
                    <p>Pergunta {props.indice + 1}</p>
                    <img src={erro}/>
                </SCRespondido>
            );
        }
        
    }else if(mostrarRespostas.includes(props.indice)){
        pergunta = (
            <SCTermo>
                <p>{answer}</p>
                <Respostas
                    respondidas = {respondidas}
                    setRespondidas = {setRespondidas}
                    indice = {props.indice}
                />
            </SCTermo>
        );
    }else{
        pergunta =(
            <SCTermo>
                <p>{question}</p>
                <img src={virar} onClick={() => setMostrarRespostas([...mostrarRespostas, props.indice])}/>
            </SCTermo>
        );
    }

    return <>{pergunta}</>
}


const SCPergunta = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    background: #FFFFFF;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    width: 300px;
    height: 65px;
    margin-bottom: 25px;
    img{
        width: 20px;
        height: 23px;
        position: absolute;
        right: 22px;
    }
     p{
        position: absolute;
        left: 15px;
        font-family: 'Recursive', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #333333;
     }
`

const SCTermo = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    width: 299px;
    height: 131px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    margin-bottom: 25px;
    padding-left: 15px;
    padding-top: 18px;

    img{
        width: 30px;
        height: 20px;
        position: absolute;
        bottom: 10px;
        right: 15px;
    }
`

const SCRespondido = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    background: #FFFFFF;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    width: 300px;
    height: 65px;
    margin-bottom: 25px;
    p{
    position: absolute;
    left: 15px;
    font-family: 'Recursive', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: ${props => props.color};
    text-decoration-line: line-through;
    }
    img{
    width: 20px;
    height: 23px;
    position: absolute;
    right: 22px;
}
`