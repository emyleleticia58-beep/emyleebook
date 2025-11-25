// ----- Smooth Scroll -----
function scrollSmooth(target) {
    document.querySelector(target).scrollIntoView({ behavior: "smooth" });
}

// ----- Tema Claro / Escuro -----
const toggleButton = document.getElementById("toggle-theme");
toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// ----- Favoritos (localStorage) -----
function addFavorite(item) {
    let favs = JSON.parse(localStorage.getItem("favoritos")) || [];

    if (!favs.includes(item)) {
        favs.push(item);
        localStorage.setItem("favoritos", JSON.stringify(favs));
        alert(item + " foi adicionado aos favoritos!");
    } else {
        alert(item + " já está nos favoritos!");
    }
}

// ----- Validação de Formulário -----
document.getElementById("form-contato").addEventListener("submit", function(e) {
    e.preventDefault();

    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let mensagem = document.getElementById("mensagem").value.trim();

    if (nome.length < 2) {
        document.getElementById("status").innerText = "Nome muito curto!";
        return;
    }

    if (!email.includes("@")) {
        document.getElementById("status").innerText = "Email inválido!";
        return;
    }

    if (mensagem.length < 5) {
        document.getElementById("status").innerText = "Mensagem muito curta!";
        return;
    }

    document.getElementById("status").innerText = "Mensagem enviada com sucesso!";
});