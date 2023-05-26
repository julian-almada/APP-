const theme = document.querySelector('.theme');
const body = document.querySelector('body');
const getMode = localStorage.getItem('mode');
console.log(getMode);

if (getMode && getMode === 'darck') {
    body.classList.add('darck-theme')
}

theme.addEventListener('click', () => {
    console.log('clik in theme');
    body.classList.toggle('darck-theme');

    if(!body.classList.contains('darck-theme')){
        return localStorage.setItem('mode', 'ligth');
    }else {
        return localStorage.setItem('mode', 'darck');
    }
});