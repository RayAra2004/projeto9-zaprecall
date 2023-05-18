import styled from 'styled-components';
import play from './../../assets/seta_play.png'

export default function Pergunta(props){
    const {question, answer} = props.card;
    
    return (
        <>
            <SCPergunta>
                <p>Pergunta {props.indice + 1}</p>
                <img src={play} alt="play"/>
            </SCPergunta>

        </>
    );
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