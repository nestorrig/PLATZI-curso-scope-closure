function greeting() {
    let username = 'Oscar';

    function displayUsername() {
        return `Hello ${username}`
    }
    return displayUsername
}

const instancia = greeting();
console.log(instancia);
console.log(instancia());