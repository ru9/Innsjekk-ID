var jsonDbRes = localStorage.getItem("dbRes");

var scannedWorker = JSON.parse(jsonDbRes);

console.log(scannedWorker);

window.onload = function() {
  var output = document.getElementById('output');

  output.innerHTML = "Name: " + scannedWorker.name + "<br />" + "Company: " + scannedWorker.company + "<br />" + "Card ID: " + scannedWorker.cardid;
}
