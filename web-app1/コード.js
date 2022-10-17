function doGet(e){
  var template = HtmlService.createTemplateFromFile('index');
  return template.evaluate();
//  counter = document.getElementById("disp_count");
//  btnAdd = document.getElementById("btn_count_up");
//  n=0;
//  btnAdd.addEventListerner("click",addCount);
}