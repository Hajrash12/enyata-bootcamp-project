let form = document.querySelector('form');
let fullname = document.querySelector('#name');
let email = document.querySelector('#email');
const error = document.querySelector('.error');
const btn = document.querySelector('.btn');

function vanish() {
    error.style.display = 'none';
}

btn.addEventListener('click', function(e){
    e.preventDefault();

    if(fullname.value === '' ||  email.value === ''){
        error.style.display = 'block';
        setTimeout(vanish, 5000)
        return;
    }
    let result = `Hello ${fullname.value}🎊👨‍💻,  
                your form has been submitted successfully. Your email is ${email.value}`
    alert(result);

    fullname.value = ''
    email.value = ''
    
});