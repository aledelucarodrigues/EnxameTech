let cursos = {
  data: [
    {
      categoria: "front",
      cursosNome: "Front-end",
      escola: "Recode-pro",
      descricao:
        "Profissionais React node.Js Full Stack conseguem solucionar uma grande gama de problemas tecnológicos que vão da navegação do usuário até o sistema de backoffice, dados e suas integrações. Profissionais com o perfil Full Stack são muito valorizados, não só pelo seu conhecimento técnico, mas também por facilitarem a comunicação entre as áreas que participam de um projeto, um intermediador, que agiliza as soluções",
      img: "https://hermes.dio.me/tracks/cover/3dd99a16-a61a-45b0-a49b-5d18185c719e.png",
    },

    {
      categoria: "back",
      cursosNome: "Back-end Java-Kotlin",
      escola: "Dio",
      descricao:
        "Profissionais React node.Js Full Stack conseguem solucionar uma grande gama de problemas tecnológicos que vão da navegação do usuário até o sistema de backoffice, dados e suas integrações. Profissionais com o perfil Full Stack são muito valorizados, não só pelo seu conhecimento técnico, mas também por facilitarem a comunicação entre as áreas que participam de um projeto, um intermediador, que agiliza as soluções",
      img: "https://hermes.dio.me/tracks/cover/f6c2772b-504b-4d94-864a-2f3594f196d7.png",
    },
    {
      categoria: "back",
      cursosNome: "Desenvolvimento Java com Cloud AWS",
      escola: "Dio",
      descricao:
        "Profissionais React node.Js Full Stack conseguem solucionar uma grande gama de problemas tecnológicos que vão da navegação do usuário até o sistema de backoffice, dados e suas integrações. Profissionais com o perfil Full Stack são muito valorizados, não só pelo seu conhecimento técnico, mas também por facilitarem a comunicação entre as áreas que participam de um projeto, um intermediador, que agiliza as soluções",
      img: "https://hermes.dio.me/tracks/cover/2eb4c56d-3092-46bb-be43-2df3591cdb82.png",
    },
    {
      categoria: "back",
      cursosNome: "Potência Tech powered by iFood - Java Beginners",
      escola: "Dio",
      descricao:
        "Profissionais React node.Js Full Stack conseguem solucionar uma grande gama de problemas tecnológicos que vão da navegação do usuário até o sistema de backoffice, dados e suas integrações. Profissionais com o perfil Full Stack são muito valorizados, não só pelo seu conhecimento técnico, mas também por facilitarem a comunicação entre as áreas que participam de um projeto, um intermediador, que agiliza as soluções",
      img: "https://hermes.dio.me/tracks/cover/f6d2d060-dc9c-40dc-b5ce-c7797d9d6b10.png",
    },
    {
      categoria: "front",
      cursosNome: "Carrefour Web Developer",
      escola: "Bootcamp dio",
      descricao:
        "Profissionais React node.Js Full Stack conseguem solucionar uma grande gama de problemas tecnológicos que vão da navegação do usuário até o sistema de backoffice, dados e suas integrações. Profissionais com o perfil Full Stack são muito valorizados, não só pelo seu conhecimento técnico, mas também por facilitarem a comunicação entre as áreas que participam de um projeto, um intermediador, que agiliza as soluções",
      img: "https://hermes.dio.me/tracks/cover/ec02ee4b-7bb2-46a7-a4e3-9426079ca083.png",
    },
    {
      categoria: "dados",
      cursosNome: "Banco de dados",
      escola: "Bootcamp dio",
      descricao:
        "O currículo de Engenharia de Dados apresenta aos alunos a amplitude da tecnologia em nuvem com conceitos, laboratórios práticos, avaliações e um projeto fundamental sobre tópicos como infraestrutura em nuvem, big data (Data Lake e Data Warehouse), Processo e Modelagem de Dados em Cloud com a utilização do Hadoop e Spark e as bibliotecas Pandas e PySpark do Python.",
      img: "https://tse3.mm.bing.net/th?id=OIP.O3pfuWoXBsFffI5Aq_g3OQHaGM&pid=Api&P=0&h=180",
    },
    {
      categoria: "dados",
      cursosNome: "Banco de dados",
      escola: "Fgv",
      descricao:
        "O currículo de Engenharia de Dados apresenta aos alunos a amplitude da tecnologia em nuvem com conceitos, laboratórios práticos, avaliações e um projeto fundamental sobre tópicos como infraestrutura em nuvem, big data (Data Lake e Data Warehouse), Processo e Modelagem de Dados em Cloud com a utilização do Hadoop e Spark e as bibliotecas Pandas e PySpark do Python.",
      img: "https://portal.fgv.br/sites/portal.fgv.br/files/styles/noticia_geral/public/noticias/05/20/ciencia-dados.jpg?itok=mKYyhgO1",
    },
    {
      categoria: "dados",
      cursosNome: "Introdução à ciência de dados em Python",
      escola: "",
      descricao:
        "O currículo de Engenharia de Dados apresenta aos alunos a amplitude da tecnologia em nuvem com conceitos, laboratórios práticos, avaliações e um projeto fundamental sobre tópicos como infraestrutura em nuvem, big data (Data Lake e Data Warehouse), Processo e Modelagem de Dados em Cloud com a utilização do Hadoop e Spark e as bibliotecas Pandas e PySpark do Python.",
      img: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/b6/f49480857811e59a278d7d1ca6079f/U-M_LogoSmHoriz_200x48.png?auto=format%2Ccompress&dpr=1&w=&h=45",
    },
    {
      categoria: "dados",
      cursosNome: "Banco de dados",
      escola: "MIT",
      descricao:
        "O currículo de Engenharia de Dados apresenta aos alunos a amplitude da tecnologia em nuvem com conceitos, laboratórios práticos, avaliações e um projeto fundamental sobre tópicos como infraestrutura em nuvem, big data (Data Lake e Data Warehouse), Processo e Modelagem de Dados em Cloud com a utilização do Hadoop e Spark e as bibliotecas Pandas e PySpark do Python.",
      img: "//portal.fgv.br/sites/portal.fgv.br/files/styles/noticia_geral/public/noticias/05/20/ciencia-dados.jpg?itok=mKYyhgO1",
    },
  ],
};

for (let i of cursos.data) {
  // Criar os cards
  let card = document.createElement("div");
  //cartão deve ter categoria
  card.classList.add("card", i.categoria, "hide");
  //img div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");

  let img = document.createElement("img");
  img.setAttribute("src", i.img);
  imgContainer.appendChild(img);
  card.appendChild(imgContainer);

  //container
  let container = document.createElement("div");
  container.classList.add("container");
  //product name
  let nome = document.createElement("h5");
  nome.classList.add("cursos-nome");
  nome.innerText = i.cursosNome.toUpperCase();
  container.appendChild(nome);
  card.appendChild(container);

  //escola
  let escola = document.createElement("span");
  escola.innerText = i.escola;
  container.appendChild(escola);

  //descrição
  let descricao = document.createElement("h6");
  descricao.innerText = i.descricao;
  container.appendChild(descricao);

  card.appendChild(container);
  document.getElementById("cursos").appendChild(card);
}

//procurar por cursos
function filterCategoria(value) {
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    // checa se o valor e igual ao inner
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  //selecionar todos os card
  let elements = document.querySelectorAll(".card");
  elements.forEach((element) => {
    // display de todos os cards
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      //checar os elementos por categorias
      if (element.classList.contains(value)) {
        element.classList.remove("hide");
      } else {
        element.classList.add("hide");
      }
    }
  });
}

/// iniciar display
window.onload = () => {
  filterCategoria("all");
};
