console.log("Start loading bundle.js.");
var cardId = localStorage.getItem("cardId");
var request = require('request');


//POSTing from form in newid
window.testResults = function(form) {
  var fullName = form.fullname.value;
  var companyName = form.companyname.value;

  let i = {
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

  request(i, function(error, resp, body) {
    console.log(error);
    console.log(resp);
    console.log(body);
    if (resp.statusCode == 200) {
      alert("You have been saved! Please swipe your card again to sign in.")
      window.location.replace("file:///D:/Innsjekk ID/index");
    } else {
      alert(resp.statusCode + "\n" + resp.statusMessage + "\n" + "Something went wrong!")
    }
  })
  alert(fullName + "\n" + companyName + "\n" + cardId);
}
console.log("Finish loading bundle.js");
