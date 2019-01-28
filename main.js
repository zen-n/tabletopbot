const readline = require("readline");
const robot = require("./robot");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let robotState = {
    x: undefined,
    y: undefined,
    facing: undefined,
    isPlaced: false,
}

input();

function input(){
    rl.question("\nWhat's your next move? ", (userInput) => {
        const commands = robot.processInput(userInput);
        commands.forEach(command => {
            robotState = processCommand(robotState, command)
        });
        console.debug(`Robot at (${robotState.x},${robotState.y}), facing ${robotState.facing}`);
        input();
    });
}
