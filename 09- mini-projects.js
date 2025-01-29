// 1. Caeser cipher. Write a program that encrypts a text using a Caesar cipher.
function caesarCipher(key, message)
{ 

    message = message.toLowerCase();
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l','m', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x','y', 'z'];

    let encrypted = "";

  for (let i=0; i< message.length; i++){
    let letter = message[i]; // h

    if(letter === " " || letter === "."){
        encrypted = encrypted + letter;
        continue; // ignore spaces and keep them
    }

    let position = alphabet.indexOf(letter); // 7
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


