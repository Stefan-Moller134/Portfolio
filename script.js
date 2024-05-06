// #Coffee Easter Egg
document.getElementById('coffee').addEventListener('transitionend', function spillMessage() {
    alert('The coffee spilled... :(');
});

document.getElementById('tile').addEventListener('transitionend', function spillMessage() {
    form();
});

const list = [1,2,3,4,5];

for (const item of list) {
    console.log(item)
}

