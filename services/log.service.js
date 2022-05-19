import chalk from 'chalk';

function printError(error) {
    console.log(chalk.bgRed('ERROR') + ' ' + error);
}

function printSuccess(message) {
    console.log(chalk.bgGreen('SUCCESS') + ' ' + message);
}

function printHelp() {
    console.log(
        `${chalk.bgCyan('HELP')}
without params - output weather
-s [CITY] for set location
-h for output help
-t [API_KEY] for save token
        `
    );
}

export { printError, printSuccess, printHelp }