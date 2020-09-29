let btn = document.getElementById("btn")
let wordCountResult = document.querySelector(".word__count")
let characterResult = document.querySelector(".characters")
let instruction = document.querySelector(".instruction")



function countWord(){
    let inputText = document.querySelector("#your_essay").value;
    let wordCount = inputText.split(" ").filter(function(n) { return n != "" }).length;
    let characterCount = inputText.length;
    wordCountResult.textContent = `The Word Count is ${wordCount}`;
    characterResult.textContent = `And there are ${characterCount} characters`
    instruction.style.display = "none";
}
