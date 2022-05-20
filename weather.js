#!/usr/bin/env node
import { getArgs } from './helpers/args.js'
import { getWeather, getIcon } from './services/api.service.js';
import { printHelp, printSuccess, printError, printWeather } from './services/log.service.js';
import { getKeyValue, saveKeyValue, TOKEN_DICTIONARY } from './services/storage.service.js';

async function saveToken(token) {
    if (!token.length) {
        printError('Token required');
        return;
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.token, token);
        printSuccess('Token saved');
    } catch (error) {
        printError(error.message)
    }
}

async function saveCity(city) {
    if (!city.length) {
        printError('City required');
        return;
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.city, city);
        printSuccess('City saved');
    } catch (error) {
        printError(error.message)
    }
}

async function getForcast() {
    try {
        const city = process.env.CITY ?? await getKeyValue(TOKEN_DICTIONARY.city);
        const weather = await getWeather(city);
        printWeather(weather, getIcon(weather.weather[0].icon));
    } catch (error) {
        if (error?.response?.status == 404) {
            printError('city name is invalid');
        } else if (error?.response?.status == 401) {
            printError('token is invalid');
        } else {
            printError(error.message);
        }
    }
}

function initCLI() {
    const args = getArgs(process.argv);
    
    if (args.h) {
        return printHelp();
    } if (args.s) {
        // save location
        return saveCity(args.s);
    } if (args.t) {
        // save token
        return saveToken(args.t);
    }
    return getForcast();
}

initCLI();