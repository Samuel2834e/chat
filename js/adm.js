import { getDatabase, ref, onValue, get } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
import conectar from './conexao.js';

conectar();

document.addEventListener("DOMContentLoaded", function () {
    const database = getDatabase();

    const btnEnviar = document.getElementById('admBtn');
    btnEnviar.addEventListener('click', admLog);
    let nome = document.getElementById('nomeAdm');
    let senha = document.getElementById('senhaAdm');
    const admRef = ref(database, 'Adm');
    function admLog() {


        get(admRef).then((snapshot) => {
            if (snapshot.exists()) {
                const senhaV = snapshot.val().senha;
                const nomeV = snapshot.val().nome;
                console.log(senhaV);
                console.log(senha.value);
                if (senhaV == senha.value && nomeV == nome.value){
                    window.location.href = "dashboard.html";
                }
                else{
                    window.alert("Dados incorretos")
                }
                
            } else {
                console.log("Erro");
            }
            nome.value = "";
            senha.value = "";
        }).catch((error) => {
            console.log("Erro ao obter os dados:", error);
        });
        

    }
});
