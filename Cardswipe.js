var scannedWorker = JSON.parse(localStorage.getItem("dbRes"));

window.onload = function() {
  if (!scannedWorker.checkedIn) {
    var checkedIn = "Logged In!"
  } else {
    var checkedIn = "Logged Out!"
  }
  var output = document.getElementById('output');

  output.innerHTML = checkedIn + "<br />" + "<br />" + "Name: " + scannedWorker.name + "<br />" + "Company: " + scannedWorker.company + "<br />" + "Card ID: " + scannedWorker.cardid;
}
