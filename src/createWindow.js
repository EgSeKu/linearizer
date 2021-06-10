//import * as vscode from 'vscode';
//import { platform } from 'os';
//import EditorTab from '../src/view';
const vscode = require('vscode');
const { platform } = require('os');
const { EditorTab } = require('./view.js');

/*vscode.commands.registerCommand('lin.start', () => {
      // Create and show panel
      const panel = vscode.window.createWebviewPanel(
        'lin',
        'Linearizer',
        vscode.ViewColumn.One,
        { }
      );*/
/**
* @param {vscode.ExtensionContext} context
* @param {vscode.WebviewPanel} currentPanel
*/
module.exports = {
    createWindow
}

function createWindow(context) {
    vscode.window.showInformationMessage('Start!');
    return vscode.commands.registerCommand(
        'lin.start', () => {

            const panel = vscode.window.createWebviewPanel(
                'lin',
                'Linearizer',
                vscode.ViewColumn.One,
                { }
              );
            const { webview } = currentPanel;
            const { extensionPath } = context;

            currentPanel.webview.html = EditorTab(context);
        }
    );
};