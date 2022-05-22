const quotes = [
  {
    quote:
      "It is impossible to live without failing at something, unless you live so cautiously you might as well not have lived at all-in which case, you fail by default.",
    author: "JK Rowling (Harry Potter series)",
  },
  {
    quote:
      "Nobody is a villain in their own story. We're all the heroes of our own stories.",
    author: "George RR Martin (Game of Thrones)",
  },
  {
    quote:
      "You can't stay in your corner of the forest waiting for the others to come to you. You have to go to them sometimes.",
    author: "AA Milne (Winnie The Pooh)",
  },
  {
    quote:
      "If you want to live a happy life, tie it to a goal. Not to people or things.",
    author: "Albert Einstein",
  },
  {
    quote: "You can do anything, If you have enthusiasm.",
    author: "Henry Ford",
  },
  {
    quote:
      "It is not the strongest species that survive, nor the most intelligent, but the most responsive to change.",
    author: "Charles Dalwin",
  },
  {
    quote: "The way to get started is to quit talking and being doing it.",
    author: "Walt Disney",
  },
  {
    quote: "Strive not to be a success, but to be of value.",
    author: "Albert Einstein",
  },
  {
    quote: "Those who dare to fail miserablely can achieve greatly.",
    author: "John F. Kennedy",
  },
  {
    quote: "Happiness is not a goal... it's a by product of life well lived.",
    author: "Eleanor Roosevelt",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
