import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
import conectar from './conexao.js';

conectar();

document.addEventListener("DOMContentLoaded", function () {
    const database = getDatabase();
    const mensagensRef = ref(database, 'Mensagens');
    let divConteudo = document.getElementById("salasDiv2");
    let salasAdicionadas = {};
    mostrarSalas();
    function mostrarSalas() {
        let top5Nos = [];

        onValue(mensagensRef, (snapshot) => {
            snapshot.forEach((childSnapshot) => {
                const childData = childSnapshot.val();
                const numSubNos = Object.keys(childData).length;
                top5Nos.push({ id: childSnapshot.key, count: numSubNos });
            });

            top5Nos.sort((a, b) => b.count - a.count);
            top5Nos = top5Nos.slice(0, 5);

            console.log('Os 5 nós com mais sub-nós são:');
            top5Nos.forEach(no => console.log(no.id + ': ' + no.count + ' sub-nós'));

            
            top5Nos.forEach(noSpan => {
                if (!salasAdicionadas[noSpan.id]) { 
                    let span = document.createElement('span');
                    span.className = "sala";
                    span.innerHTML = "<strong>" + noSpan.id + "</strong></br>";
                    divConteudo.appendChild(span);
                    salasAdicionadas[noSpan.id] = true; 
                    
                }
            });
        });

    }


});
