var a = new XMLHttpRequest();

a.open('get', 'test.php', true)
a.responseText = 'text';

a.onload = function() {
  if (a.readyState === a.DONE){
    if (a.status === 200){
      console.log(a.response);
      console.log(a.responseText);
    }
  }
};

a.send(null);