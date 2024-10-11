let form = document.querySelector("#login");

form.addEventListener("submit",loginButtonHandler);

function loginButtonHandler(event){
    event.preventDefault();

    let formData = new FormData(form);

    sendFormData(formData);
}

function sendFormData(formData){
    const username = formData.get("username");
    const password = formData.get("password");

    if (username === "username" && password === "password"){
        window.location.href = "lobby.html";
    }
}