console.log("Start loading bundle.js.");
var request = require('request');

//GETing cardinfo from server
window.checkCardId = function() {
  var cardId = prompt("Enter Card ID", "");
  if (cardId == "" || cardId == null) {
    return;
  };
  localStorage.setItem("cardId", cardId);

  let i = {
    uri: 'http://localhost:8080/api/worker/' + cardId,
  }

  request(i, function(error, resp, body) {
    console.log(error);
    console.log(resp);
    console.log(body);

    if (resp.statusCode == 404) {
      console.log("404 on statuscode");
      window.location.replace("file:///D:/Innsjekk ID/newid");
    } else {
      localStorage.setItem("dbRes", resp.body);
      console.log("found id");
      window.location.replace("file:///D:/Innsjekk ID/Cardswipe");
    }
  })
}

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
