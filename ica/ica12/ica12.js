
const newQuoteButton = document.querySelector("#js-new-quote");
const answerButton = document.querySelector("#js-tweet");

const endpoint = "https://trivia.cyberwisp.com/getrandomchristmasquestion";

let currentAnswer = "";

newQuoteButton.addEventListener("click", getQuote);
answerButton.addEventListener("click", showAnswer);

async function getQuote() {
  console.log("New quote button clicked!");

  try {
    const response = await fetch(endpoint);

    if (!response.ok) {
      throw new Error("Failed to fetch trivia.");
    }

    const data = await response.json();

    console.log(data);

    displayQuote(data);

  } catch (error) {
    console.error("Error fetching trivia:", error);
    alert("Something went wrong while fetching trivia.");
  }
}

function displayQuote(data) {
  const quoteText = document.querySelector("#js-quote-text");
  const answerText = document.querySelector("#js-answer-text");

  quoteText.textContent = data.question;
  currentAnswer = data.answer;

  answerText.textContent = "";
}

function showAnswer() {
  const answerText = document.querySelector("#js-answer-text");
  answerText.textContent = currentAnswer;
}

// Load a quote automatically when the page opens
getQuote();