function doGet(e){
  var template = HtmlService.createTemplateFromFile('index'); 
  return template.evaluate(); 
}