const myModal = new bootstrap.Modal("#transaction-modal");
let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem("session");
let data = {
    transactions: []
}:

checkLogged();

function checkLogged() {
    if(session) {
        sessionStorage.setItem("logged", session);
        logged = session;
    }
    if (!logged) {
        window.location.href = "index.html";
        return;

    }
    const dataUser = localStorage.getItem(Logged);
    if(dataUser) {
        data = JSON.parse(dataUser);
    }

    console.log(data);
}