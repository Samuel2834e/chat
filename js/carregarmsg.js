import { getDatabase, ref, push, set, onValue } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
import conectar from './conexao.js';

conectar();

document.addEventListener("DOMContentLoaded", function () {

    function carregarmsg() {
        const numeroDaSala = document.getElementById('sala').value;
            const database = getDatabase();
            const mensagensRef = ref(database, 'Mensagens/' + numeroDaSala);
            onValue(mensagensRef, (snapshot) => {
                const data = snapshot.val();
                const divConteudo = document.getElementById('mensagens');
                divConteudo.innerHTML = '';
                if (data) {
                    for (let id in data) {
                        let span = document.createElement('span'); // Use <span> instead of <p>
                        span.className = "friend last";
                        span.innerHTML = "<strong>" + data[id].nome + "</strong>" + "   " + data[id].mensagem;
                        divConteudo.appendChild(span);
                    }
                } else {
                    divConteudo.textContent = 'Nenhuma mensagem encontrada para a sala ' + numeroDaSala;
                }
            });
    }

    document.getElementById('showChatBtn').addEventListener('click', carregarmsg);
});
