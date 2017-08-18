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

//var counter= 0;

var button = document.getElementById("counter");


button.onclick = function(){
    
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function(){
        
        if (request.readystate === XMLHttpRequest.Done){
            
            if(request.status === 200){
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    }
     
request.open('GET','http://dineshmanikantatimothiraju58.imad.hasura-app.io/counter',true);
request.send(null);
    
}

//submit name


var submit = document.getElementById('submit_btn');
submit.onclick = function(){
    
    var nameInput = document.getElementById('name');
var name = nameInput.value;
     var request = new XMLHttpRequest();
    
    request.onreadystatechange = function(){
        
        if (request.readystate === XMLHttpRequest.Done){
            
            if(request.status === 200){
               var names = request.responseText;
               names = JSON.parse(names);
                var list = '';
                for(var i=0; i<names.length; i++){
                    list += '<li>'+ names[i] +'</li>';
                }
                
                var ul=document.getElementById('namelist');
                ul.innerHTML = list;
            }
        }
    }
     
request.open('GET','http://dineshmanikantatimothiraju58.imad.hasura-app.io/submit-name?name=' +name,true);
request.send(null);

    
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


var button = document.getElementById("counter1");


button.onclick = function(){
    
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function(){
        
        if (request.readystate === XMLHttpRequest.Done){
            
            if(request.status === 200){
                var counter1 = request.responseText;
                var span = document.getElementById('count1');
                span.innerHTML = counter1.toString();
            }
        }
    }
     
request.open('GET','http://dineshmanikantatimothiraju58.imad.hasura-app.io/commentone',true);
request.send(null);
    
}

//submit name


var submit = document.getElementById('submit_btn1');
submit.onclick = function(){
    
    var nameInput = document.getElementById('comment');
var comment = commentInput.value;
     var request = new XMLHttpRequest();
    
    request.onreadystatechange = function(){
        
        if (request.readystate === XMLHttpRequest.Done){
            
            if(request.status === 200){
               var comments = request.responseText;
               comments = JSON.parse(comments);
                var list = '';
                for(var i=0; i<comments.length; i++){
                    list += '<li>'+ comments[i] +'</li>';
                }
                
                var ul=document.getElementById('commentlist');
                ul.innerHTML = list;
            }
        }
    }
     
request.open('GET','http://dineshmanikantatimothiraju58.imad.hasura-app.io/submit-comment?comment=' +comment,true);
request.send(null);

    
};





















