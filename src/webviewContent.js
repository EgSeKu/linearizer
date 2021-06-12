module.exports = {
    getWebviewContent
}

function getWebviewContent() {
    html = `<!DOCTYPE html>
      <html lang="en">
      
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
                <input class="inp" type="text" placeholder="Repository" id="rep">
                <input class="inp" type="text" placeholder="Start" id="start">
                <input class="inp" type="text" placeholder="End" id="end">
            </form>
            <div class="buttons">
                <button class="func" id="button_linearize">
                    Linearize
                </button>
                <button class="func" id="button_help">
                    Help
                </button>
            </div>
        </div>
        <script>
          const vscode = acquireVsCodeApi();
          const buttonHelp = document.getElementById('button_help');
          
          buttonHelp.addEventListener('click', helpFunc);
          
          function helpFunc() {
            vscode.postMessage({
              command: 'help'
            }
            )
          };
        </script>
      </body>
      
      </html>`;
  
      return html;
  }