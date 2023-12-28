function calculateLevel(wins, losses) {
    let winRank = wins - losses;
    let level = '';

    if (wins <= 10) {
        level = 'Iron';
    } else if (wins <= 20) {
        level = 'Bronze';
    } else if (wins <= 50) {
        level = 'Silver';
    } else if (wins <= 80) {
        level = 'Gold';
    } else if (wins <= 90) {
        level = 'Diamond';
    } else if (wins <= 100) {
        level = 'Legendary';
    } else {
        level = 'Immortal';
    }

    return `El héroe tiene un saldo de ${winRank} y está en el nivel ${level}`;
}

const result = calculateLevel(30, 30);
console.log(result);