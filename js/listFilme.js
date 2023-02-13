const buscaFilme = async (titulo,ano,chave) => {
    
    let query = `https://www.omdbapi.com/?i=tt3896198&${chave}&t=${titulo}`;
    
    if(ano!==""){
       query+= `&y=${ano}`;
    }

    const resposta = await fetch(query);

    const filmeDados = await resposta.json();
    
    if(filmeDados.Response === 'True'){

    const {Title,Released,Runtime,Genre,Actors,Plot,Poster,imdbRating} = await filmeDados;
    
    const filme ={
                    titulo:Title,
                    lancamento:Released,
                    duracao:Runtime,
                    genero:Genre,
                    elenco:Actors,
                    sinopse:Plot,
                    imagem:Poster,
                    nota:imdbRating,
                    response:true,
                    error:''
                };

        return filme;
    }else{
        return {
            response:false,
            error:'filme não encontrado'
        };
    }
};

export default buscaFilme;