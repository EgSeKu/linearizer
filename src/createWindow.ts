import * as vscode from 'vscode';
import { platform } from 'os';
import EditorTab from './view';
//const vscode = require('vscode');
//const { platform } = require('os');
//const { EditorTab } = require('./view.js');

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
const createWindow = ({
    context,
    currentPanel
}: {
    context;
    currentPanel;
}) => {
    vscode.window.showInformationMessage('Start!');
    return vscode.commands.registerCommand(
        'lin.start', () => {
            const columnToShowIn = vscode.window.activeTextEditor
                ? vscode.window.activeTextEditor.viewColumn
                : undefined;

            const { webview } = currentPanel;
            const { extensionPath } = context;

            currentPanel.webview.html = EditorTab({
                extensionPath,
                platform: platform(),
                webview,
            });

        }
    );
};
export default createWindow;