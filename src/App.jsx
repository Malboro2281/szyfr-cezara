import React from "react";

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function encryptChar(char, shift) {

  const position = ALPHABET.indexOf(char);

  if (position === -1) {
    return char;
  }

  
  let newPosition = position + shift;

  
  if (newPosition >= ALPHABET.length) {
    newPosition = newPosition - ALPHABET.length;
  }

  return ALPHABET[newPosition];
}