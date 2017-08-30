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
    };
     
request.open('GET','http://dineshmanikantatimothiraju58.imad.hasura-app.io/counter',true);
request.send(null);
    
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//submit-login details

var submit1 = document.getElementById('submit_btn2');
submit1.onclick = function(){

     var request1 = new XMLHttpRequest();
    
    request1.onreadystatechange = function(){
        
        if (request1.readystate === XMLHttpRequest.Done){
            
            if(request1.status === 200){
                alert('Logged inn Sucessfully');
            } else if (request1.status === 403){
                alert('username/password is incorrect');
            }
             else if(request1.status === 500){
                 alert('Something went wrong with the server');
             }
               
            }
        };
    };
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    console.log(username);
    console.log(password);
    request1.open('POST','http://dineshmanikantatimothiraju58.imad.hasura-app.io/login' ,true);
    request1.setRequestHeader('Content-Type','application/json');
    request1.send(JSON.stringify({username: username, password: password}));

    
};




















