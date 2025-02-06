// 1. Caesar cipher. Write a program that encrypts a text using a Caesar cipher.
function caesarCipher(key, message)
{ 

    message = message.toLowerCase();
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l','m', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x','y', 'z'];

    let encrypted = "";

  for (let i=0; i< message.length; i++){
    let letter = message[i]; // h



    let position = alphabet.indexOf(letter); // 7 // -1

    if (position == -1) {
      encrypted = encrypted + letter;
      continue; // ignore spaces and keep them
  }
    let newPosition= (position + key) % alphabet.length; 
    let newLetter= alphabet[newPosition];

    encrypted = encrypted + newLetter;
    

  }

  return encrypted;
}

console.log (caesarCipher(3, "sara"));
console.log (caesarCipher(3, "SARA m. RASHED"));
console.log (caesarCipher(3, "zoo keeper"));

console.log (2=="2");
console.log (2==="2");
console.log (2===2);

// now use dom manipulation to get the input from the user and display the result in the browser
let answer = document.getElementById("answer"); // empty paragraph
let userMessage = document.getElementById("message"); // input field, where user types the message
let key = document.getElementById("key"); // input field, where user types the key
let button = document.getElementById("button"); // button

button.addEventListener("click", function(){ // when the button is clicked, the function is executed
  console.log("button clicked");
  console.log(key);
  console.log(key.value);
  let result = caesarCipher(Number(key.value), userMessage.value);
  answer.textContent = result;
}
);

// 2. Write a program that decrypts a text using a Caesar cipher.


