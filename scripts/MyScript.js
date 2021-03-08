alert("Хуй");
var oReq = new XMLHttpRequest();
oReq.onload = function() {
   alert(this.responseText);
   };
oReq.open("get", "DB-connection.php", true);
oReq.send();