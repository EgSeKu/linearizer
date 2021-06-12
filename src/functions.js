const vscode = require('vscode');
module.exports = {
    helpFunc,
    hello,
    help,
    linearize
}

function helpFunc() {
    vscode.window.showInformationMessage('Fuck VS Code Api and its developers.');
};

function hello() {
    vscode.window.showInformationMessage('Hello!');
}

function help() {
    const { exec } = require("child_process");

    exec("hostname", (error, stdout, stderr) => {
        if (error) {
            vscode.window.showInformationMessage(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            vscode.window.showInformationMessage(`stderr: ${stderr}`);
            return;
        }
        vscode.window.showInformationMessage(`stdout: ${stdout}`);
    });
}

function linearize() {
    const { exec } = require("child_process");

    exec("hostname", (error, stdout, stderr) => {
        if (error) {
            vscode.window.showInformationMessage(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            vscode.window.showInformationMessage(`stderr: ${stderr}`);
            return;
        }
        vscode.window.showInformationMessage(`stdout: ${stdout}`);
    });
}