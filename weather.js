#!/usr/bin/env node
import {getArgs} from './helpers/args.js'
import { printHelp } from './services/log.service.js';

function initCLI() {
    const args = getArgs(process.argv);
    console.log(args);
    if (args.h) {
        // output help
        printHelp();
    } if (args.h) {
        // save location
    } if (args.t) {
        // save token
    }
    // output weather
}

initCLI();