const vscode = require('vscode');
//import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

    let greeting = vscode.commands.registerCommand('lin.hello', hello);

    context.subscriptions.push(greeting);
    context.subscriptions.push(
        vscode.commands.registerCommand('lin.start', () => {
            // Create and show panel
            const panel = vscode.window.createWebviewPanel(
                'lin',
                'Linearizer',
                {}
            );

            // And set its HTML content
            panel.webview.html = getWebviewContent();
        })
    );
}

function helpFunc() {
  vscode.window.showInformationMessage('SOMEBODY HELP ME!');
};

exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {
}

function getWebviewContent() {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="index.css">
      <title>Linearizer</title>
      <style>
        body {
          position: relative;
          margin-top: 15%;
        }
    
        .form {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          height: 50%;
          width: 50%;
          
          margin: 0px auto;
          text-align: center;
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          margin: auto;
        }
    
        .inp {
          font-family: Roboto;
          font-size: 2vh;
          line-height: 5vh;
          width: 48vh;
          margin-top: 3%;
          display: flex;
          align-items: center;
          background: #CCCCCC;
          border-color: transparent;
          color: #666666;
        }
    
        .buttons {
          display: flex;
          flex-direction: wrap;
          align-items: center;
        }
    
        .func {
          border-radius: 5px;
          text-align: center;
          align-items: center;
          height: 8vh;
          width: 10vw;
          margin: 5%;
          font-family: Roboto;
          font-style: normal;
          font-weight: normal;
          font-size: 1;
          line-height: 1;
          text-align: center;
        }
    
        .func:not(.active) {
          background: #CD6326;
          color: #F7F7F7;
        }
    
        .func:hover {
          /* Цвет фона под ссылкой */
          background: #E39128;
          color: #F7F7F7;
        }
    
        .func:active {
          background: #8F5613;
          color: #F7F7F7;
        }
      </style>
    </head>
    
    <body>
      <div class="form">
        <form>
          <input class="inp" type="text" placeholder="Repository">
        </form>
        <form>
          <input class="inp" type="text" placeholder="Start">
        </form>
        <form>
          <input class="inp" type="text" placeholder="End">
        </form>
        <div class="buttons">
          <button class="func">
            Linearize
          </button>
          <button class="func" onclick="${helpFunc()}">
            Help
          </button>
        </div>
      </div>
    </body>
    
    </html>`;
}

function hello() {
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
  // vscode.window.showInformationMessage('Hello!');
}


module.exports = {
    activate,
    deactivate,
    hello
}
