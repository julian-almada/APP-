const theme = document.querySelector('.theme');
const theme2 = document.querySelector('.theme2');

const html = document.querySelector('html');
const getMode = localStorage.getItem('mode');
console.log(getMode);

if (getMode && getMode === 'darck') {
    html.classList.add('darck-theme')
}

theme.addEventListener('click', () => {
    console.log('clik in theme');
    html.classList.toggle('darck-theme');

    if(!html.classList.contains('darck-theme')){
        return localStorage.setItem('mode', 'ligth');
    }else {
        return localStorage.setItem('mode', 'darck');
    }
});

theme2.addEventListener('click', () => {
    console.log('clik in theme');
    html.classList.toggle('darck-theme');

    if(!html.classList.contains('darck-theme')){
        return localStorage.setItem('mode', 'ligth');
    }else {
        return localStorage.setItem('mode', 'darck');
    }
});