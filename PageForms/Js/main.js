// main.js

import { db } from "./firebase.js";
import { addDoc, collection } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const form = document.getElementById("formPrestador");
const overlay = document.getElementById("overlay");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  try {
    const dados = new FormData(form);
    const objeto = Object.fromEntries(dados.entries());

    // remove imagem (evita erro do Firebase)
    delete objeto.imagem;

    // salva no Firestore
    await addDoc(collection(db, "prestadores"), objeto);

    // 🔥 mostra overlay (fundo escuro + mensagem)
    overlay.classList.add("show");

    // limpa formulário
    form.reset();

    // esconde depois de 3 segundos
    setTimeout(() => {
      overlay.classList.remove("show");
    }, 3000);

  } catch (erro) {
    console.error("Erro ao salvar:", erro);

    alert("Erro ao enviar. Tente novamente.");
  }
});