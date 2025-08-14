const perguntas = [
  { pergunta: "Qual foi a primeira aparição do Superman?", opcoes: ["Action Comics #1", "Detective Comics #27", "Superman #1", "More Fun Comics #52"], correta: "Action Comics #1" },
  { pergunta: "O Batman fez sua estreia em qual revista?", opcoes: ["World’s Finest Comics #3", "Detective Comics #27", "Batman #1", "Adventure Comics #40"], correta: "Detective Comics #27" },
  { pergunta: "Quem foi o primeiro Lanterna Verde da Era de Ouro?", opcoes: ["Hal Jordan", "John Stewart", "Alan Scott", "Guy Gardner"], correta: "Alan Scott" },
  { pergunta: "A Mulher-Maravilha apareceu pela primeira vez em:", opcoes: ["Sensation Comics #1", "Wonder Woman #1", "All Star Comics #8", "Action Comics #12"], correta: "All Star Comics #8" },
  { pergunta: "Qual equipe foi formada na Era de Ouro?", opcoes: ["Liga da Justiça", "Sociedade da Justiça da América", "Novos Titãs", "Patrulha do Destino"], correta: "Sociedade da Justiça da América" },
  { pergunta: "Qual herói marcou o início da Era de Prata da DC?", opcoes: ["Barry Allen como Flash", "Hal Jordan como Lanterna Verde", "Supergirl", "Hawkman"], correta: "Barry Allen como Flash" },
  { pergunta: "Qual é a primeira aparição de Barry Allen como Flash?", opcoes: ["Flash Comics #1", "Showcase #4", "The Flash #123", "Showcase #22"], correta: "Showcase #4" },
  { pergunta: "Quem foi o Lanterna Verde da Era de Prata?", opcoes: ["Alan Scott", "Hal Jordan", "Kyle Rayner", "Simon Baz"], correta: "Hal Jordan" },
  { pergunta: "Qual revista apresentou pela primeira vez a Liga da Justiça da América?", opcoes: ["Justice League of America #1", "Brave and the Bold #28", "World’s Finest Comics #94", "Showcase #12"], correta: "Brave and the Bold #28" },
  { pergunta: "Em The Flash #123, ocorre um evento importante. Qual é?", opcoes: ["Morte de Barry Allen", "Primeira corrida entre Flash e Superman", "Primeira aparição da Terra-2", "Origem do Flash Reverso"], correta: "Primeira aparição da Terra-2" },
  { pergunta: "Qual história marcou o início da fase mais sombria da DC na Era de Bronze?", opcoes: ["A Noite em que Gwen Stacy Morreu", "Green Lantern/Green Arrow: Hard-Traveling Heroes", "The Killing Joke", "Crise nas Infinitas Terras"], correta: "Green Lantern/Green Arrow: Hard-Traveling Heroes" },
  { pergunta: "O que acontece com Jason Todd na Era de Bronze?", opcoes: ["Ele vira Robin", "Ele morre nas mãos do Coringa", "Ele se torna Capuz Vermelho", "Ele perde a memória"], correta: "Ele vira Robin" },
  { pergunta: "Em Action Comics #500, qual marco ocorre?", opcoes: ["Origem do Superman recontada", "Casamento de Superman e Lois Lane", "Superman perde os poderes", "Primeira aparição de Brainiac"], correta: "Origem do Superman recontada" },
  { pergunta: "Em “The Judas Contract”, quem trai os Novos Titãs?", opcoes: ["Donna Troy", "Cyborg", "Terra", "Ravena"], correta: "Terra" },
  { pergunta: "O Arqueiro Verde sofre uma grande perda na Era de Bronze. O que é?", opcoes: ["Sua empresa", "Sua fortuna", "Sua base", "Sua cidade natal"], correta: "Sua fortuna" },
  { pergunta: "Quem é o principal vilão de Crise nas Infinitas Terras?", opcoes: ["Darkseid", "Anti-Monitor", "Brainiac", "Pariah"], correta: "Anti-Monitor" },
  { pergunta: "Qual personagem morre heroicamente para salvar o multiverso durante a Crise?", opcoes: ["Batman", "Barry Allen", "Hal Jordan", "Aquaman"], correta: "Barry Allen" },
  { pergunta: "Qual heroína sacrifica sua vida para salvar outros heróis na Crise?", opcoes: ["Mulher-Maravilha", "Supergirl", "Donna Troy", "Canário Negro"], correta: "Supergirl" },
  { pergunta: "Durante a Crise, quantas Terras principais existiam antes de serem unificadas?", opcoes: ["2", "3", "5", "Incontáveis"], correta: "Incontáveis" },
  { pergunta: "Qual foi o impacto final da Crise nas Infinitas Terras no universo DC?", opcoes: ["Apenas os heróis mudaram de visual", "O multiverso foi destruído e substituído por uma única Terra unificada", "Todos os vilões desapareceram", "O Batman se aposentou"], correta: "O multiverso foi destruído e substituído por uma única Terra unificada" }
];

function construirQuiz() {
  const quizContainer = document.getElementById("quiz");
  quizContainer.innerHTML = "";
  
  perguntas.forEach((q, i) => {
    const bloco = document.createElement("div");
    bloco.classList.add("question");
    bloco.innerHTML = `<p>${i+1}. ${q.pergunta}</p>`;
    
    const respostas = document.createElement("div");
    respostas.classList.add("answers");
    
    q.opcoes.forEach(opcao => {
      const label = document.createElement("label");
      label.innerHTML = `<input type="radio" name="pergunta${i}" value="${opcao}"> ${opcao}`;
      respostas.appendChild(label);
    });
    
    bloco.appendChild(respostas);
    quizContainer.appendChild(bloco);
  });
}

function finalizarQuiz() {
  let pontos = 0;
  
  perguntas.forEach((q, i) => {
    const resposta = document.querySelector(`input[name="pergunta${i}"]:checked`);
    if (resposta && resposta.value === q.correta) {
      pontos++;
    }
  });
  
  // Salva resultado para a página de resultados
  localStorage.setItem("quizAcertos", pontos);
  localStorage.setItem("quizTotal", perguntas.length);
  
  // Vai para a página de resultados
  window.location.href = "resultado.html";
}

document.getElementById("submit").addEventListener("click", finalizarQuiz);
construirQuiz();