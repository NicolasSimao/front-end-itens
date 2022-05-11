import Cabecalho from '../components/Cabecalho';
import Rodape from '../components/Rodape';
import './Itens.css';
import imagem from './humaaans-space.png';
const ItensPage = function () {
    return (
        <>
           <Cabecalho />
            <main> <h1>Itens</h1>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>    
            </main> 
            <img src={imagem} alt="" />
             <Rodape />
        </>
    );
};

export default ItensPage;