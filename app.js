

function pesquisar() {
  
    let section = document.getElementById("resultados-pesquisa");
  
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if (!campoPesquisa) {
      section.innerHTML = "<p class='mensagem-erro'>Nenhum resultado foi encontrado. Você precisa digitar o nome de algum jogo ou gênero.</p>";
      return;
  }

    campoPesquisa = campoPesquisa.toLowerCase()

    console.log(campoPesquisa)

    let resultados = "";
    let titulo = "";
    let description = "";
    let tags = "";

    for (let dado of dados) {

      titulo = dado.titulo.toLowerCase()
      description = dado.description.toLowerCase()
      tags = dado.tags.toLowerCase()

      if (titulo.includes(campoPesquisa) || description.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        resultados += `
        <div class="item-resultado">
          <h2>
            <a href="${dado.site}" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">
            ${dado.description}
          </p>
          <a href="${dado.site}" target="_blank">Mais Informações Sobre</a>
        </div>
      `;
      } 
      console.log(dado.titulo.includes(campoPesquisa))

    }
  
    if (!resultados) {
      resultados = "<p class='mensagem-erro'>Nenhum resultado foi encontrado sobre a pesquisa em questão.</p>";
    }

    section.innerHTML = resultados;

  }