const vscode = require('vscode');
const path = require('path');
/**
*   @param {vscode.ExtensionContext} context
*/
module.exports = {
    EditorTab
}
function EditorTab(context) {
    const assetUri = (fp) => {
        const fragments = fp.split('/');
        const vscodeUri = vscode.Uri.file(
            path.join(extensionPath, ...fragments)
        );

        return webview.asWebviewUri(vscodeUri);
    };


    const html = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="${vscode.Uri.file('src/index.css')}">
      <title>Linearizer</title>
      
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
          <button class="func" onclick="">
            Help
          </button>
        </div>
      </div>
    </body>
    
    </html>`;

    return html;
};
//export default EditorTab;