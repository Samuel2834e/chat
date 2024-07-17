import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getStorage, ref, listAll, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-storage.js";
import { getDatabase, ref as dbRef, push, set } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAxum1cxJZjh9PfAyzz2Rh3qsX_aaFAcbE",
  authDomain: "chat-addb5.firebaseapp.com",
  projectId: "chat-addb5",
  storageBucket: "chat-addb5.appspot.com",
  messagingSenderId: "889242869643",
  appId: "1:889242869643:web:7794b1df1a98f83710198e",
  measurementId: "G-TKZ5RVBWR5"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const database = getDatabase(app);

// Função para contar imagens
async function contarImg() {
  let sala = document.getElementById("sala").value;
  const pastaImagens = ref(storage, sala + '/');
  try {
    const result = await listAll(pastaImagens);
    let numeroDeImagens = result.items.length;
    return numeroDeImagens;
  } catch (error) {
    console.error("Erro ao listar arquivos:", error);
    return 0;
  }
}

// Função para enviar a mensagem com o URL da imagem
function enviarMensagemComUrl(nome, mensagem, url) {
  const numeroDaSala = document.getElementById('sala').value;
  let dataAtual = new Date();

  const horas = dataAtual.getHours();
  const minutos = dataAtual.getMinutes();
  const segundos = dataAtual.getSeconds();
  function formatarNumero(numero) {
    return numero < 10 ? `0${numero}` : numero;
  }
  const hhmmss = `${formatarNumero(horas)}:${formatarNumero(minutos)}:${formatarNumero(segundos)}`;
  const data = dataAtual.toDateString() + " " + hhmmss;

  const mensagensRef = dbRef(database, 'Mensagens/' + numeroDaSala);
  const novaMensagemRef = push(mensagensRef);
  set(novaMensagemRef, {
    nome: nome,
    mensagem: mensagem,
    url: url,
    data: data
  });
}

// Função para upload do arquivo
async function uploadFile(file) {
  let sala = document.getElementById("sala").value;
  let num = await contarImg();

  const newStorageRef = ref(storage, `${sala}/${num + 1}`);
  try {
    await uploadBytes(newStorageRef, file);
    const downloadURL = await getDownloadURL(newStorageRef);
    console.log('URL do arquivo', downloadURL);

    // Enviar a mensagem com o URL da imagem
    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('messageInput').value;
    enviarMensagemComUrl(nome, mensagem, downloadURL);

  } catch (error) {
    console.error('Erro ao enviar o arquivo:', error);
  }
}

// Evento de DOM carregado
document.addEventListener("DOMContentLoaded", function () {
  const imgInput = document.getElementById("imgEnviada");
  const btn = document.getElementById("sendImgBtn");

  btn.addEventListener('click', () => {
    const file = imgInput.files[0];
    if (file) {
      uploadFile(file);
      imgInput.value = "";
    }
  });
});
