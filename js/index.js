import { chave } from "./variaveis.js";
import buscaFilme from "./listFilme.js";

document.querySelector("#botao").addEventListener("click",async () => {
    
    const tituloFilme = document.querySelector("#tituloId").value;

    //const ano = document.querySelector("#anoId").value;
    
    const detalhes = document.querySelector(".detalhes");

    const filme = await buscaFilme(tituloFilme,2010,chave);

    if(filme.response){
        detalhes.innerHTML = `
            <h1>${filme.titulo}</h1>
            <p><strong>lançamento</strong>: ${filme.lancamento}</p>
            <p><strong>gênero</strong>:${filme.genero}</p>
            <p><strong>duração</strong>:${filme.duracao}</p>
            <p><strong>nota</strong>:${filme.nota}</p>
            <img src=${filme.imagem}>
        `;
    }else{
        detalhes.innerHTML = `<h1>${filme.error}<h1>`
    }
    
});