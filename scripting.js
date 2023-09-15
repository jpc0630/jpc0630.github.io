function showAnswer(){
    const answer = document.getElementById("sentenceInput").value;
    const outputAns = document.getElementById("p3");
    outputAns.textContent = answer;

    const locationSent = document.getElementById("locationInput").value;
    const output2 = document.getElementById("p2");
    output2.textContent = locationSent;
}

function generateBlanks() {
    const sentence = document.getElementById("sentenceInput").value;
    const blanks = document.getElementById("blankInput").value.split(",").map(word => word.trim());
    const output = document.getElementById("p3");

    if (sentence.trim() === "") {
      output.textContent = "Please enter a sentence.";
    } else if (blanks.length === 0 || blanks[0] === "") {
      output.textContent = "Please enter words to blank.";
    } else {
      const blankedSentence = sentence.split(" ").map(word => blanks.includes(word) ? "______" : word).join(" ");
      output.textContent = blankedSentence;
    }

    // show translation or not
    if(true) {  // true if you want to show the location, false if not
        const translationSent = document.getElementById("translateInput").value;
        const output1 = document.getElementById("p1");
        output1.textContent = translationSent;
    } else { // removes the sitas location
        const koll = " "
        const output1 = document.getElementById("p1");
        output1.textContent = koll;
    }
    // show location or not
    if(false) {  // true if you want to show the location, false if not
        const locationSent = document.getElementById("locationInput").value;
        const output2 = document.getElementById("p2");
        output2.textContent = locationSent;
    } else { // removes the sitas location
        const koll = " "
        const output2 = document.getElementById("p2");
        output2.textContent = koll;
    }
}