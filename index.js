function game() {
    document.getElementById('btn1').innerHTML = "Game Started"

  var id1 = document.getElementById("td1");
  let id2 = document.getElementById("td2");
  let id3 = document.getElementById("td3");
  let id4 = document.getElementById("td4");
  let id5 = document.getElementById("td5");
  let id6 = document.getElementById("td6");
  let id7 = document.getElementById("td7");
  let id8 = document.getElementById("td8");
  let id9 = document.getElementById("td9");

//----------------------1---------------------
id1.addEventListener("click",function(){
    id1.textContent= 'X';
})
id1.addEventListener("dblclick",function(){
    id1.textContent = 'O';
})
console.log(id1)

//----------------------2---------------------
id2.addEventListener("click",function(){
    id2.textContent = 'X';
})
id2.addEventListener("dblclick",function(){
    id2.textContent = 'O';
})

//----------------------3---------------------
id3.addEventListener("click",function(){
    id3.textContent = 'X';
})
id3.addEventListener("dblclick",function(){
    id3.textContent = 'O';
})

//----------------------4---------------------
id4.addEventListener("click",function(){
    id4.textContent = 'X';
})
id4.addEventListener("dblclick",function(){
    id4.textContent = 'O';
})

//----------------------5---------------------
id5.addEventListener("click",function(){
    id5.textContent = 'X';
})
id5.addEventListener("dblclick",function(){
    id5.textContent = 'O';
})

//----------------------6---------------------
id6.addEventListener("click",function(){
    id6.textContent = 'X';
})
id6.addEventListener("dblclick",function(){
    id6.textContent = 'O';
})

//----------------------7---------------------
id7.addEventListener("click",function(){
    id7.textContent = 'X';
})
id7.addEventListener("dblclick",function(){
    id7.textContent = 'O';
})

//----------------------8---------------------
id8.addEventListener("click",function(){
    id8.textContent = 'X';
})
id8.addEventListener("dblclick",function(){
    id8.textContent = 'O';
})

//----------------------9---------------------
id9.addEventListener("click",function(){
    id9.textContent = 'X';
})
id9.addEventListener("dblclick",function(){
    id9.textContent = 'O';
})
let restart = document.getElementById("restart");
restart.addEventListener("click",()=>{
    game.innerHTML =""
})
}

