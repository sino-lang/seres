#!/usr/bin/env node

import { Command } from 'commander';
import { version as packageVersion } from './package.json';

// 创建命令行程序
const program = new Command();

// 设置版本号
program.version(packageVersion);

// "run" 子命令
program
    .command('run')
    .alias('r')
    .description('Run the program')
    .action(() => {
        console.log('Running the program...');
    });

// "new" 子命令
program
    .command('new')
    .alias('n')
    .description('Create a new file')
    .action(() => {
        console.log('Creating a new file...');
    });

// "install" 子命令
program
    .command('install')
    .alias('i')
    .description('install the program')
    .action(() => {
        console.log('install the program...');
    });

// "build" 子命令
program
    .command('build')
    .alias('b')
    .description('build the program')
    .action(() => {
        console.log('build the program...');
    });

// 解析命令行参数
program.parse(process.argv);
