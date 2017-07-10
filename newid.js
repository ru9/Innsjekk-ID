//GETing stored variable Card ID
var cardId = localStorage.getItem("cardId");


//Storing and sending info to node
function testResults(form) {
  var fullName = form.fullname.value;
  var companyName = form.companyname.value;
  var xhr = new XMLHttpRequest();
  xhr.open('POST', "http://localhost:8080/api/worker/", true);
  xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
  xhr.send(JSON.stringify({
    "name": fullName,
    "company": companyName,
    "cardid": cardId,
    "checkedIn": false
  }));
  alert(fullName + "\n" + companyName + "\n" + cardId);
}
