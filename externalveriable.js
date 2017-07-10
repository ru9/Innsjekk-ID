function f1() {
  localStorage.removeItem("Card ID");
}

function storeCardId() {
  var checkId = prompt("Enter Card ID", "");
  if (checkId === "") {
    alert("ID can't be empty");
    return;
  }
  localStorage.setItem("cardId", checkId);
  //Send request to node
  var xhr = new XMLHttpRequest();
  xhr.open('GET', "http://localhost:8080/api/worker/" + checkId, true);
  xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      console.log(xhr.response); //Outputs a DOMString by default
      if (this.status == 404) {
        window.location.replace("file:///D:/Innsjekk ID/newid");
        console.log(this.status + "this");
      } else {
        localStorage.setItem("dbRes", xhr.response);
        window.location.replace("file:///D:/Innsjekk ID/Cardswipe");

      }
    }

  }
  xhr.send();


}
