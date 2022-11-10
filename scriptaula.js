
function mFuncao(){
    var x = document.getElementById("paragrafo");
    if(x.innerHTML=="Hello!"){
        x.innerHTML="Olá!";
    }else{
        x.innerHTML = "Hello!";
    }
}
function botao(){
   var y = document.querySelector("body");
    if(y.bgColor==""){
        y.setAttribute("bgColor","green");
        }else{
            y.setAttribute("bgColor","");
        }
}