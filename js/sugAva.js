import { getDatabase, ref, push, set, onValue } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
import conectar from './conexao.js';

conectar();
document.addEventListener("DOMContentLoaded", function () {
    const database = getDatabase();

    const btnEnviar = document.getElementById('sugAvaBtn');
    btnEnviar.addEventListener('click', SugAva);

    function SugAva() {
        const nome = document.getElementById('nomeSA').value;
        const sugestao = document.getElementById('sugestao').value;

        const rates = document.querySelectorAll('.rates');
        let selectedRate;

        rates.forEach(rate => {
            if (rate.checked) {
                selectedRate = rate.value;
            }
        });

        const avaliacao = selectedRate;

        const database = getDatabase();
        const sugRatRef = ref(database, 'SugestRates/');
        const novaSugRatRef = push(sugRatRef);
        set(novaSugRatRef, {
            nome: nome,
            sugestao: sugestao,
            avaliacao: avaliacao
        });
    }
    
});
