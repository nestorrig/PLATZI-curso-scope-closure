/// NO FUNCIONA PARA MANTENER UN RECUENTO
function myMoney(coins) {
    let saveCoins = 0;
    saveCoins += coins;
    console.log(`Money available: $${saveCoins}`);
}
myMoney(5); // Money available: $5
myMoney(5); // Money available: $5

/// ESTA SI
function myMoneyBox(username){
    let saveCoins = 0;

    function countCoins(coins) {
        saveCoins += coins;
        console.log(`${username} tu nuevo saldo es: $${saveCoins}`);
    }
    return countCoins;
}
// creamos una instacia a nuestro gusto
const ana = myMoneyBox('Ana')
ana(90); // Ana tu nuevo saldo es: $90
ana(66); // Ana tu nuevo saldo es: $156
ana(9); // Ana tu nuevo saldo es: $165
const juan = myMoneyBox('Juan')
juan(100); // Juan tu nuevo saldo es: $100
juan(20); // Juan tu nuevo saldo es: $120
juan(7); // Juan tu nuevo saldo es: $127