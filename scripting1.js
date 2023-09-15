function showAnswer(){
    const answer = document.getElementById("locationInput").value;
    const outputAns = document.getElementById("p2");
    outputAns.style.textDecoration = "underline";
    outputAns.style.fontSize = "2cm";
    outputAns.textContent = answer;
}

function hideAnswer(){
    const translationSent = document.getElementById("translateInput").value;
    const output1 = document.getElementById("p1");
    output1.textContent = translationSent;

    const sitasSentence = document.getElementById("sentenceInput").value;
    const output = document.getElementById("p3");
    output.textContent = sitasSentence;

    const koll = " ";
    const output2 = document.getElementById("p2");
    output2.textContent = koll;
}