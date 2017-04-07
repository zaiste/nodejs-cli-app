#! /usr/bin/env node

const open = require('open');

const argv = require('yargs')
  .version()
  .usage('Usage: nodejs-cli-app <command> [options]')
  .command(['init [dir]', 'initialize', 'i'], 'Initialize the directory', require('./lib/init'))
  .example('nodejs-cli-app init my-project', 'Create a dummy `my-project` directory')
  .example('nodejs-cli-app init my-project --engine turbo', 'Create a dummy `my-project` directory with `turbo` engine')
  .command(['docs'], 'Go to the documentation at https://zaiste.net', {}, _ => open('https://zaiste.net'))
  .demandCommand(1, 'You need at least one command before moving on')
  .help('h')
  .alias('h', 'help')
  .epilogue('for more information, find the documentation at https://zaiste.net')
  .argv;
