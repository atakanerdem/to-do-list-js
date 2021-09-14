document.getElementById("addToDo").addEventListener("click", function(){
    let textbox = document.getElementById("input");
    let value = textbox.value;
    if(document.getElementById("input").value.length == 0)
    {
        alert("Please enter task.")
    }
    else{
        addToList(value);
        clearText(textbox);}
    
   
  
})

function clearText(element){
    element.value='';
}

var i = 0;
function addToList(value){
   var ul= document.getElementById("tasks");
   var li = document.createElement("li");
   var span = document.createElement("span");
   span.id=i;
   span.textContent="X";
   li.appendChild(document.createTextNode(value));
   li.appendChild(span);
   li.onclick = function(){
       if( this.style.textDecoration == "line-through"){
       this.style.textDecoration = "auto";
   } 
   else {
    this.style.textDecoration ="line-through";
   }
   
}
   ul.appendChild(li);
   span.onclick = function(){
    this.parentElement.style.display="none";
   }
   i++;
}

let input = document.querySelector('input');
let output = document.querySelector('h2');
input.addEventListener('keyup', (event) => {
 
    if(event.getModifierState('CapsLock')){
        output.style.display = 'block';
    }else {
        output.style.display = 'none';
    }
 
});


