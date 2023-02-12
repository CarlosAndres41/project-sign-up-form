const pwd = document.querySelector("#pwd")
const pwdConf = document.querySelector("#pwd-conf")
const pwdErrorMsg = document.querySelector(".pwd-error")

pwdConf.addEventListener("keyup", () => {
    if (pwd.value == pwdConf.value) {
        console.log("passwords match");
        pwdErrorMsg.style.color = "transparent"
        pwdConf.style.borderColor = "green"
        pwd.style.borderColor = "green"
    } else {
        console.log("not matching");
        pwdErrorMsg.style.color = "red"
        pwdConf.style.borderColor = "red"
        pwd.style.borderColor = "red"
    }
})



