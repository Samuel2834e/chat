import { getDatabase, ref, push, set, onValue } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
import conectar from './conexao.js';

conectar();
document.addEventListener("DOMContentLoaded", function () {
    const database = getDatabase();

    const btnEnviar = document.getElementById('sendButton');
    btnEnviar.addEventListener('click', enviarMensagem);

    function enviarMensagem() {
        const nome = document.getElementById('nome').value;
        const mensagem = document.getElementById('messageInput').value;
        const numeroDaSala = document.getElementById('sala').value;

        const database = getDatabase();
        const mensagensRef = ref(database, 'Mensagens/' + numeroDaSala);
        const novaMensagemRef = push(mensagensRef);
        set(novaMensagemRef, {
            nome: nome,
            mensagem: mensagem
        });
        let mensagemsd = document.getElementById('messageInput').value = "";
    }
    
});
