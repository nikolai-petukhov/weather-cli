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

function printWeather(res, icon) {
    console.log(
`${chalk.bgYellow('WEATHER')} in the ${res.name}
${icon}  ${res.weather[0].description}
Temperature: ${res.main.temp} (feels like ${res.main.feels_like})
Humidity: ${res.main.humidity}%
Wind speed: ${res.wind.speed}
        `
    );
}

export { printError, printSuccess, printHelp, printWeather }