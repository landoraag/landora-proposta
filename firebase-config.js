/*
 * Configuração do Firebase.
 *
 * Quando o site está publicado no Firebase Hosting, a configuração do projeto
 * é carregada automaticamente de /__/firebase/init.json (endereço reservado do
 * próprio Hosting) — não é preciso colar chaves aqui.
 *
 * Para usar outro lugar (ou testar fora do Hosting), preencha manualmente:
 *   window.FIREBASE_CONFIG = { apiKey: "...", authDomain: "...", projectId: "...",
 *     storageBucket: "...", messagingSenderId: "...", appId: "..." };
 *
 * Essas chaves são públicas por natureza; quem protege os dados são as regras
 * do Firestore (firestore.rules).
 */
window.FIREBASE_CONFIG = null;

(function () {
  if (window.FIREBASE_CONFIG && window.FIREBASE_CONFIG.projectId) return;
  var h = location.hostname;
  if (h === "localhost" || h === "127.0.0.1" || h === "" || location.protocol === "file:") return;
  try {
    var x = new XMLHttpRequest();
    x.open("GET", "/__/firebase/init.json", false); // síncrono: precisa estar pronto antes do store.js
    x.send();
    if (x.status === 200) {
      var c = JSON.parse(x.responseText);
      if (c && c.projectId) window.FIREBASE_CONFIG = c;
    }
  } catch (e) { /* segue em modo demonstração */ }
})();