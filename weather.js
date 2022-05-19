#!/usr/bin/env node
import {getArgs} from './helpers/args.js'

function initCLI() {
    const args = getArgs(process.argv);
    console.log(args);
    if (args.h) {
        // output help
    } if (args.h) {
        // save location
    } if (args.t) {
        // save token
    }
    // output weather
}

initCLI();