var cardId = localStorage.getItem("cardId");
//var request = require('request');

//Storing and sending info to node
function testResults(form) {
  var fullName = form.fullname.value;
  var companyName = form.companyname.value;

  /*  let i = {
      method: 'POST',
      uri: 'http://localhost:8080/api/worker/',
      body: {
        "name": fullName,
        "company": companyName,
        "cardid": cardId,
        "checkedIn": false
      },
      json: true
    }

    request(i)
      .then(function(response) {
        console.log(response)
      })
      .catch(function(err) {
        console.log(err)
      }) */
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
  window.location.replace("file:///D:/Innsjekk ID/index");
}
