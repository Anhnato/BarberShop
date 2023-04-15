function validateForm() {

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !message) {
        alert("Fill in your information bro");
        return false;
    }

    return true;
}

var nameInput = document.getElementById('name');
document.querySelector('form.myForm').addEventListener('submit', function(e) {
    e.preventDefault();

    console.log(nameInput.value);
})

var emailInput = document.getElementById('email');
document.querySelector('form.myForm').addEventListener('submit', function(e) {
    e.preventDefault();

    console.log(emailInput.value);
})

var messageInput = document.getElementById('message');
document.querySelector('form.myForm').addEventListener('submit', function(e) {
    e.preventDefault();

    console.log(messageInput.value);
})