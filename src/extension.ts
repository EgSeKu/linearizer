//const vscode = require('vscode');
//const path = require('path');
import createWindow from './createWindow';
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
 
function activate(context) {

  let currentPanel: vscode.WebviewPanel | undefined = undefined;
  let greeting = vscode.commands.registerCommand('lin.hello', hello);
  
  context.subscriptions.push(greeting);
  context.subscriptions.push(createWindow({ context, currentPanel}));

}

function helpFunc() {
  vscode.window.showInformationMessage('SOMEBODY HELP ME!');
};

exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {
}

function hello() {
  vscode.window.showInformationMessage('Hello!');
}

module.exports = {
  activate,
  deactivate,
  hello
}
