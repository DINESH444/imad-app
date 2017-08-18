console.log('Loaded!');

alert("Welcome to my Web-App");

//var element = document.getElementById('main-text')

//element.innerHTML = 'New Value'

//move the image

var img = document.getElementById('madi');

var marginLeft= 0;

function moveRight(){
    marginLeft= marginLeft + 1;
    img.style.marginLeft =marginLeft + 'px';
}

img.onclick=function(){
    var interval = setInterval(moveRight,10);
   // img.style.marginLeft= '100px';
}



//Counter code

var counter= 0;

var button = document.getElementById("counter");


button.oncclick1 = function(){
    
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function(){
        
        if (request.readystate === XMLHttpRequest.Done){
            
            if(request.status === 200){
                var counterv= request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    }
     
request.open('GET','http://dineshmanikantatimothiraju58.imad.hasura-app.io/counter',true);
request.send(null);
    
}