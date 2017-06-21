//var bodyParser = require('body-parser');

function testResults(form) {
  var fullName = form.fullname.value;
  var companyName = form.companyname.value;

  var xhr = new XMLHttpRequest();
  xhr.open('POST', "http://localhost:8080/api/worker/", true);
  xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');



  xhr.send(JSON.stringify({
    "name": fullName,
    "company": companyName
  }));
  alert(fullName + "\n" + companyName);
}





//FOCUS and BLUR functinons for inputfields in form
function inputFocus(i) {
  if (i.value == i.defaultValue) {
    i.value = "";
    i.style.color = "#000";
  }
}

function inputBlur(i) {
  if (i.value == "") {
    i.value = i.defaultValue;
    i.style.color = "#888";
  }
}
