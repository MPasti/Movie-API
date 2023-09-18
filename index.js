// esta função é assíncrona
let buscaFilme = async () => {
  // recupera o valor do campo cep
  let movie = document.getElementById("filme").value;
  // monta a url de onde está localizado a API
  let url = `https://www.omdbapi.com/?apikey=e572d81f&t=${movie}`;
  // faz a requisição HTTP
  // await é uma função síncrona, pois enquanto a API não responder,
  // o código não continua
  // fecth é uma função nativa do JS que faz requisições HTTP
  let resposta = await fetch(url);
  // transforma a resposta em um objeto JSON, pois chegar em string
  let respostaJSON = await resposta.json(); // a conversão pode demorar
  // preenche os campos do formulário com os dados do JSON
  let posterImg = respostaJSON.Poster;
  console.log("img", posterImg);
  document.getElementById("lancamento").value = respostaJSON.Released;
  document.getElementById("tempo").value = respostaJSON.Runtime;

  document.getElementById("poster").src = respostaJSON.Poster;
  document.getElementById("plot").value = respostaJSON.Plot;
  document.getElementById("uf").value = respostaJSON.uf;
  document.getElementById("localidade").value = respostaJSON.localidade;
};
