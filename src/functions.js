const vscode = require('vscode');
module.exports = {
    helpFunc,
    hello,
    help,
    linearize
}

function helpFunc() {
    const { exec } = require("child_process");

  exec("Linearizer -h", (error, stdout, stderr) => {
      if (error) {
        vscode.window.showInformationMessage(`error: ${error.message}`);
          return;
      }
      if (stderr) {
        vscode.window.showInformationMessage(`${stderr}`);
          return;
      }
      vscode.window.showInformationMessage(`${stdout}`);
  });;
};

function hello() {
    vscode.window.showInformationMessage('Hello!');
}

function help() {
    const { exec } = require("child_process");

    exec("Linearizer -h", (error, stdout, stderr) => {
        if (error) {
            vscode.window.showInformationMessage(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            vscode.window.showInformationMessage(`${stderr}`);
            return;
        }
        vscode.window.showInformationMessage(`${stdout}`);
    });
}

function linearize() {
    const { exec } = require("child_process");

    exec("Linearizer -l //repo //setting", (error, stdout, stderr) => {
        if (error) {
            vscode.window.showInformationMessage(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            vscode.window.showInformationMessage(`${stderr}`);
            return;
        }
        vscode.window.showInformationMessage(`${stdout}`);
    });
}