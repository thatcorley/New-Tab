const button = document.getElementById("gen_pass");
const genned_pass = document.getElementById("genned_pass");


button.addEventListener("click", function() {
    const c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    let password = "";

    for (let i = 0; i < 12; i++) {
        password += c[Math.floor(Math.random() * c.length)];
    }

    genned_pass.innerHTML = password;
});