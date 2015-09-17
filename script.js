//$(documeny).ready(function(){
  //$('button').click(function() {

var button = document.getElementById("button");


var xmlh;
xmlh = new XMLHttpRequest();
button.addEventListener("click", 
  function(){
    xmlh.open("GET", "https://hb-server-time.herokuapp.com", true);
    xmlh.send();
  }
);

xmlh.onreadystatechange = function() {
    if (xmlh.readyState === 4 ) {
       if(xmlh.status === 200){
           document.getElementById("serverTime").innerHTML = xmlh.responseText;
       }
       else if(xmlh.status === 400) {
          alert('There was an error 400');
       }
       else {
           alert('something else other than 200 was returned');
       }
    }
};
xmlh.open("GET", "https://hb-server-time.herokuapp.com", true);
xmlh.send();
//});
//});
