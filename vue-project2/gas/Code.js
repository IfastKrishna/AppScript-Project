const CONFIG = {
  TITLE: 'GAS VUE APP'
}

function doGet(e) {
  return HtmlService.createTemplateFromFile('index.html')
    .evaluate()
    .addMetaTag('viewport', 'width=device-width, initial-scale=1.0')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .setTitle(CONFIG.TITLE)
}

function includes(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent()
}

function apiSetCount(options) {
  options = JSON.parse(options)
  const ws = SpreadsheetApp.getActive().getSheetByName('Sheet1')
  ws.appendRow([new Date(), options.count, options.count * 2])
  return JSON.stringify({
    success: true,
    message: 'Count has been set!'
  })
}
