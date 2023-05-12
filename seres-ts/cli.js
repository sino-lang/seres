#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = require("commander");
var package_json_1 = require("./package.json");
// 创建命令行程序
var program = new commander_1.Command();
// 设置版本号
program.version(package_json_1.version);
// "run" 子命令
program
    .command('run')
    .description('Run the program')
    .action(function () {
    console.log('Running the program...');
});
// "new" 子命令
program
    .command('new')
    .description('Create a new file')
    .action(function () {
    console.log('Creating a new file...');
});
// "install" 子命令
program
    .command('install')
    .description('install the program')
    .action(function () {
    console.log('install the program...');
});
// "build" 子命令
program
    .command('build')
    .alias('b')
    .description('build the program')
    .action(function () {
    console.log('build the program...');
});
// 解析命令行参数
program.parse(process.argv);
