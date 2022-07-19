var pass = document.getElementById("password");
var msg = document.getElementById("message");
var msg2 = document.getElementById("message2");
var str = document.getElementById("strenght");
var str2 = document.getElementById("sifre-denkleme");
var kayıtOl = document.getElementById("kayıt-ol");
var girisYap = document.getElementById("giris-yap");
var passwordButton = document.getElementById("password-tekrar");
var girişButonu = document.getElementById("giriş-butonu");
var kayıtButonu = document.getElementById("kayıt-butonu");
var email = document.getElementById("email");
var backTus = document.getElementById("geri-tusu");
var backTus2 = document.getElementById("geri-tusu2");


kayıtOl.addEventListener('click', () => {
    passwordButton.style.display = "flex";
    girisYap.style.background = "transparent";
    kayıtOl.style.background = "#000";
    girişButonu.style.display = "none";
    kayıtButonu.style.display = "flex";
    pass.innerText = "";

    pass.addEventListener('input', () => {
        if (pass.value.length > 0) {
            msg.style.display = "block";
        }
        else {
            msg.style.display = "none";
        }
        if (pass.value.length < 6) {
            str.innerHTML = "güçsüz";
            pass.style.borderColor = "#ff5925";
            msg.style.color = "#ff5925";
        }
        else if (pass.value.length >= 6 && pass.value.length < 12) {
            str.innerHTML = "iyi";
            pass.style.borderColor = "yellow";
            msg.style.color = "yellow";
        }
        else if (pass.value.length >= 12) {
            str.innerHTML = "çok iyi";
            pass.style.borderColor = "#26d730";
            msg.style.color = "#26d730";
        }
    })
    passwordButton.addEventListener('input', () => {
        if (passwordButton.value.length > 0) {
            msg2.style.display = "block";
        }
        else {
            msg2.style.display = "none";
        }
        if (pass.value === passwordButton.value) {
            passwordButton.style.borderColor = "#26d730";
            msg2.style.color = "#26d730";
            str2.innerHTML = "eşleşti";
        }
        else {
            passwordButton.style.borderColor = "#ff5925";
            msg2.style.color = "#ff5925";
            str2.innerHTML = "denk değil";
        }
    })
    email.value = "";
    pass.value = "";
    backTus.style.display = "none";
    backTus2.style.display = "flex";
});

girisYap.addEventListener('click', () => {
    kayıtOl.style.background = "transparent";
    girisYap.style.background = "#000";
    passwordButton.style.display = "none";
    kayıtButonu.style.display = "none";
    girişButonu.style.display = "flex";
    pass.style.borderColor = "#ccc";
    passwordButton.style.borderColor = "#ccc";
    msg.style.display = "none";
    msg2.style.display = "none";
    pass.addEventListener('input', () => {
        msg.style.display = "none";
        pass.style.borderColor = "#ccc";
    })
    email.value = "";
    pass.value = "";
    passwordButton.value = "";
});

