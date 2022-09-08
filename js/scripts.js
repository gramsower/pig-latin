// Utility Logic

function isEmpty(testString) {
  return (testString.trim().length === 0);
}

// Business Logic

function wordCounter(text) {
  if (isEmpty(text)) {
    return 0;
  }
  let wordCount = 0;
  const textArray = text.split(" ");
  textArray.forEach(function(element) {
    if (!Number(element)) {
    wordCount++;
  }
});
  return wordCount;
}

function numberOfOccurrencesInText(word, text) {
  if (isEmpty(word)) {
    return 0;
  }
  const textArray = text.split(" ");
  let wordCount = 0;
  textArray.forEach(function(element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
    wordCount++;
  }
});
  return wordCount;
}

function vowelCounter(text) {
  let vowelCount = 0;
  const textArray = text.split("");
  for (let i=0; i<textArray.length; i++) {
    if (textArray[i] === "a" || textArray[i] === "e" || textArray[i] === "i" || textArray[i] === "o" || textArray[i] === "u") {
      vowelCount++;
    } 
  }
  return vowelCount;
};

function pigLatin(word) {
  let pLWord;
  const textArray = word.split("");
  for(let i=0; i<=word.length; i+=1) {
    if (textArray[0]==="a" || textArray[0]==="e" || textArray[0]==="i" || textArray[0]==="o" || textArray[0]==="u") {
      pLWord = (word + "way");
    } else if (textArray[0]==="q" ) {
      pLWord = (word.slice(2)+word.slice(0,2)+"ay");
    } else if (textArray[0]==="s" && textArray[1]==="q" && textArray[2]==="u") {
      pLWord = (word.slice(3)+word.slice(0,3)+"ay");
    } else if (textArray[2]!=="a" || textArray[2]!=="e" || textArray[2]!=="i" || textArray[2]==="o" || textArray[2]!=="u") { 
        pLWord = (word.slice(3)+word.slice(0,3)+"ay")
    } else if (textArray[1]!=="a" || textArray[1]!=="e" || textArray[1]!=="i" || textArray[1]!=="o" || textArray[1]!=="u") {
        pLWord = (word.slice(2)+word.slice(0,2)+"ay")
    } else {
      pLWord = (word.slice(1)+word.slice(0,1)+"ay")
    }
  }
  return pLWord;
};


/* function omitOffensiveWords(word, text) {
  const textArray = text.split(" ");
  let wordCountZoinks = 0;
  textArray.forEach(function(element) {
    if (word.toLowerCase().includes  */

// UI Logic

function boldPassage(word, text) {
  if (isEmpty(word) || isEmpty(text)) {
    return null;
  }
  const p = document.createElement("p");
  let textArray = text.split(" ");
  textArray.forEach(function(element) {
    if (word === element) {
      const bold = document.createElement("strong");
      bold.append(element);
      p.append(bold);
    } else {
      p.append(element);
    }
    if (index !== (textArray.length - 1)) {
      p.append(" ");
    }
  });
    return p;
}

function handleFormSubmission() {
  event.preventDefault();
  const passage = document.getElementById("text-passage").value;
  const word = document.getElementById("word").value;
  const wordCount = wordCounter(passage);
  const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
  document.getElementById("total-count").innerText = wordCount;
  document.getElementById("selected-count").innerText = occurrencesOfWord;
  let boldedPassage = boldPassage(word, passage);
  if (boldedPassage) {
    document.querySelector("div#bolded-passage").append(boldedPassage);
  } else {
    document.querySelector("div#bolded-passage").innerText = null;
  }
}

window.addEventListener("load", function() {
  document.querySelector("form#word-counter").addEventListener("submit", handleFormSubmission);
});