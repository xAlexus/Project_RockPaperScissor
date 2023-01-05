



const getComputerChoice = () => {
    const choices = ['rock', 'Paper', 'Scissor'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

console.log(getComputerChoice()); // Gibt zufällig "Stein", "Papier" oder "Schere" aus