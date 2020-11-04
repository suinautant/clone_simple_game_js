const block = document.getElementById('block');
const character = document.getElementById('character');

function jumpCharacter(){
  if (character.classList != "jump"){
    character.classList.add("jump");
  }
  setTimeout(function(){
    character.classList.remove("jump");
  }, 500)
}

const checkDead = setInterval(function(){
  const blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
  const characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));

  if(blockLeft <= 20 && blockLeft > 0 && characterTop > 130){
    block.style.animation = "none";
    block.style.display = "none";
    alert("u lose.");
  }
},10);
