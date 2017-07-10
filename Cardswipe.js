var scannedWorker = JSON.parse(localStorage.getItem("dbRes"));

window.onload = function() {
  var output = document.getElementById('output');

  output.innerHTML = "Name: " + scannedWorker.name + "<br />" + "Company: " + scannedWorker.company + "<br />" + "Card ID: " + scannedWorker.cardid;
}
