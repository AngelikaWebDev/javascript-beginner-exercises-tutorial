function sing() {
    let line = "let it be";
    let answer = "there will be an answer";
    let wisdom = "whisper words of wisdom";

    let lyrics = "";
    for (let i = 0; i < 4; i++) {
        lyrics += line + ", ";
    }
    lyrics += answer + ", ";
    for (let i = 0; i < 4; i++) {
        lyrics += line + ", ";
    }
    lyrics += wisdom + ", " + line;
    
    return lyrics;
}


//Your code above ^^^

console.log(sing());
