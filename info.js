const mb = document.getElementById('mb')

let counterMb = 100;

setInterval(() => {
    if (counterMb == 40) {
        clearInterval();
    } else {
        counterMb -= 1;
        mb.innerText = counterMb
    }
}, 15);