let form = document.querySelector(".container");
let nameValue = document.querySelector('#name');
let emailValue = document.querySelector('#email');
let message = document.querySelector('#Message')
let submitbtn = document.querySelector('.submitbtn');
let error = document.querySelectorAll('.error');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit",(e) => {
    e.preventDefault();
    let valid = true;
    
    error.forEach(err => {
        err.innerText = "";
        err.style.color = "red"; 
    });

    if (nameValue.value.trim() === ""){
        error[0].innerText = "⚠ Please enter your name.";
        valid = false;
    }
    
    if (emailValue.value.trim() === ""){
        error[1].innerText = "⚠ Please enter your email.";
        valid = false;
    }else if (!emailRegex.test(emailValue.value.trim())){
        error[1].innerText = "⚠ Please enter correct Email.";
        valid = false;
    }

    if (message.value.trim() === ""){
        error[2].innerText = "⚠ Please enter your message.";
        valid = false;
    }
    
    if(valid){
        error[3].style.color = 'green';
        error[3].innerText = "Form submited successfully"
        form.reset();
    }
})



