const signUpForm = document.getElementById("signUpForm")
const cancel = document.getElementById("cancel")
const logOn  = document.getElementById("logOn")

signUpForm.addEventListener("click", (e) => {
    if(e.target.id === "signUpForm"){
        window.location.href="https://mjmealey.github.io/sign-up-form/"
    }
})

cancel.addEventListener("click", (e) => {
    if(e.target.id === "cancel"){
        window.location.href = "https://mjmealey.github.io/confirmAccount/"
    }
})

logOn.addEventListener("click", (e) => {
    if(e.target.id === "logOn"){
        if(username.validity() && password.validity()){
            window.location.href = "https://mjmealey.github.io/central-page/"
        }
    }
}) 