const button = document.querySelector('.button');
const snackbar = document.querySelector('.snackbar');

button.addEventListener('click', show);

async function show(){

    snackbar.style.display = 'block';

    setTimeout(() => {
        
        snackbar.style.opacity = 1;

        snackbar.classList.add('display');
    
    }, 100);


    setTimeout(() => {
        
        snackbar.style.opacity = 0;

        snackbar.classList.remove('display');
    
    },1800);

    setTimeout(() => {snackbar.style.display = 'none'},2000);

}