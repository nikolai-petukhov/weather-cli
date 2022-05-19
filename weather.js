#!/usr/bin/env node
import { getArgs } from './helpers/args.js'
import { printHelp, printSuccess, printError } from './services/log.service.js';
import { saveKeyValue } from './services/storage.service.js';

async function saveToken(token) {
    try {
        await saveKeyValue('token', token);
        printSuccess('Token saved');
    } catch (error) {
        printError(error.message)
    }
}

function initCLI() {
    const args = getArgs(process.argv);
    console.log(args);
    if (args.h) {
        printHelp();
    } if (args.h) {
        // save location
    } if (args.t) {
        // save token
        return saveToken(args.t);
    }
    // output weather
}

initCLI();