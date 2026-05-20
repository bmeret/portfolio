document.getElementById("sendMail").addEventListener("click", function () {

    const nom = encodeURIComponent(document.getElementById("name").value);
    const emailUser = encodeURIComponent(document.getElementById("email").value);
    const objet = encodeURIComponent(document.getElementById("objet").value);
    const message = encodeURIComponent(document.getElementById("message").value);

    const destinataire = "brennanmeret@gmail.com";
    const sujet = encodeURIComponent("Contact depuis le portfolio");

    const body = `Nom Prénom : ${nom}%0AEmail : ${emailUser}%0AObjet : ${objet}%0A%0AMessage :%0A${message}`;

    window.location.href = `mailto:${destinataire}?subject=${sujet}&body=${body}`;
});
