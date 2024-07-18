import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
import conectar from './conexao.js';

conectar();

document.addEventListener("DOMContentLoaded", function () {
    const database = getDatabase();

    const mensagensRef = ref(database, 'Mensagens/');

    onValue(mensagensRef, (snapshot) => {
        const data = snapshot.val();
        const count = data ? Object.keys(data).length : 0;
        document.getElementById('count').innerHTML = `${count}`;
    }, {
        onlyOnce: true
    });



    function sugestoes() {
        const database = getDatabase();

        const sugestoesRef = ref(database, 'SugestRates/');
        
        onValue(sugestoesRef, (snapshot) => {
          const data = snapshot.val();
          const sugestoesDiv = document.getElementById('sugestoes');
          sugestoesDiv.innerHTML = ''; // Limpa o conteúdo anterior
      
          if (data) {
            for (let id in data) {
              const sugestao = data[id];
              const sugestaoElement = document.createElement('div');
              let span = document.createElement('span');

              span.className = "card";
              
             

              
              // Formatar a sugestão para exibição
              //sugestaoElement.textContent = `${sugestao.nome}: ${sugestao.sugestao} - Nota: ${sugestao.avaliacao}`;
              span.innerHTML = "<strong>"+`@${sugestao.nome}` + "</strong>" +  `${sugestao.sugestao} <br> Nota: ${sugestao.avaliacao}`;

              sugestoesDiv.appendChild(span);
            }
          } else {
            sugestoesDiv.textContent = 'Nenhuma sugestão encontrada.';
          }
        }, {
          onlyOnce: true // Ler os dados apenas uma vez
        });
    }
    sugestoes();
});
