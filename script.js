document.getElementById('coffee').addEventListener('transitionend', function spillMessage() {
    alert('The coffee spilled... :(');
});

document.getElementById('tile').addEventListener('transitionend', function spillMessage() {
    form();
});