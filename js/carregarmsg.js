import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
import { getStorage, listAll, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-storage.js";
import conectar from './conexao.js';

conectar();

document.addEventListener("DOMContentLoaded", function () {
    function carregarmsg() {
        const numeroDaSala = document.getElementById('sala').value;
        const database = getDatabase();
        const mensagensRef = ref(database, 'Mensagens/' + numeroDaSala);
        onValue(mensagensRef, async (snapshot) => {
            const data = snapshot.val();
            const divConteudo = document.getElementById('mensagens');
            divConteudo.innerHTML = '';
            if (data) {
                for (let id in data) {
                    let span = document.createElement('span'); // Use <span> instead of <p>
                    span.className = "friend last";
                    span.style.wordBreak = "break-word";

                    // Verifica se a mensagem contém um URL de imagem
                    if (data[id].url) {
                        span.innerHTML = "<strong>@" + data[id].nome + "</strong> <br><img src='" + data[id].url + "' id='imgMsgEnviada'>" + "<a id='dt' style='float: right;'>" + data[id].data + "</a>";
                    } else {
                        span.innerHTML = "<strong>@" + data[id].nome + "</strong> " + data[id].mensagem + " <a id='dt' style='float: right;'>" + data[id].data + "</a>";
                    }

                    divConteudo.appendChild(span);
                }
            } else {
                divConteudo.textContent = 'Nenhuma mensagem encontrada para a sala ' + numeroDaSala;
            }
        });
    }

    document.getElementById('showChatBtn').addEventListener('click', carregarmsg);

    function pesquisarMsg() {
        let pMsg = document.getElementById("pesquisarMsg").value;
        var elements = document.getElementsByClassName("friend last");
        for (var i = 0; i < elements.length; i++) {
            var text = elements[i].innerText;

            // Dividir a string no primeiro espaço e pegar tudo que vem depois
            var afterSpace = text.split(' ').slice(1).join(' ');

            if (afterSpace.includes(pMsg)) {
                elements[i].style.display = 'block';
            } else {
                elements[i].style.display = 'none';
            }
        }
    }

    document.getElementById('pesquisarMsg').addEventListener('input', pesquisarMsg);
});
