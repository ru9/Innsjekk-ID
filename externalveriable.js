function f1() {
  alert("Card ID = " + localStorage.getItem("Card ID"));
}

function storeCardId() {
  var checkId = prompt("Enter Card ID", "");
  if (checkId === "") {
    alert("ID can't be empty");
    return;
  }
  localStorage.setItem("Card ID", checkId);
  if (checkId == cardId1) {
    window.location.replace("file:///D:/Innsjekk ID/Cardswipe");
  } else {
    window.location.replace("file:///D:/Innsjekk ID/newid");
  }
}
