let input = document.querySelector('input');
let str = 'HELLO WORLD';
let i = 0;
// input.value = str;
setInterval(() => {
    if (i < str.length) {
        input.value += str[i];
        i++;
    } else if (i == str.length) {
        return;
    } else {
        input.value = '';
        i = 0;
    }
}, 150);