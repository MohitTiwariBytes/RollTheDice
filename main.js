document.getElementById('rollButton').addEventListener('click', function() {
    const dice1 = document.getElementById('dice1');
    const dice2 = document.getElementById('dice2');

    dice1.classList.add('rolling');
    dice2.classList.add('rolling');

    setTimeout(function() {
        const value1 = Math.floor(Math.random() * 6) + 1;
        const value2 = Math.floor(Math.random() * 6) + 1;
        // Coded by Mohit
        console.log(value1, value2)
        dice1.textContent = value1;
        dice2.textContent = value2;

        dice1.classList.remove('rolling');
        dice2.classList.remove('rolling');
    }, 600);
});
