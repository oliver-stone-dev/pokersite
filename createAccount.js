let form = document.querySelector("#login");

form.addEventListener("submit",createAccountButtonHandler);

function createAccountButtonHandler(event){
    event.preventDefault();

    let formData = new FormData(form);

    sendFormData(formData);
}

async function sendFormData(formData){
    const username = formData.get("username");
    const password = formData.get("password");

    if (username === "username" && password === "password"){
        window.location.href = "index.html";
    }
}