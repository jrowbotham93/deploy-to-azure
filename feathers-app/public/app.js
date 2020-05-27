const jargonVerbs = [
  "align",
  "growth hacking",
  "Leverage",
  "Drill Down",
  "Gain Traction",
  "deep dive"
];
const subject = ["We", "The team", "I"];
const imperative = ["should", "must", "need to"];
const linking = ["In order to", "so we can"];
const verb = ["obtain", "acquire", "get", "become"];
const jargonNouns = [
  "Low-Hanging Fruit",
  "Tiger Team",
  "Idea Shower or Thought Shower",
  "Learnings",
  "hyperlocal",
  "move the needle",
  "quick win"
];

function randomSelection(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function displayContent(string, tag) {
  console.log(string);
  document.querySelector("output").textContent = string;
}

function createJargonString(
  imperative,
  subject,
  jargonVerbs,
  linking,
  jargonNouns,
  verb
) {
  let randomJargonVerbs = randomSelection(jargonVerbs);
  let randomJargonNouns = randomSelection(jargonNouns);
  let randomVerbs = randomSelection(verb);
  let randomLinking = randomSelection(linking);
  let randomSubject = randomSelection(subject);
  let randomImperative = randomSelection(imperative);
  console.log(
    `${randomSubject} ${randomImperative} ${randomJargonVerbs} ${randomLinking} ${randomVerbs} ${randomJargonNouns}`
  );

  let jargonString = `${randomSubject} ${randomImperative} ${randomJargonVerbs} ${randomLinking} ${randomVerbs} ${randomJargonNouns}`;
  return displayContent(jargonString, "output");
}
